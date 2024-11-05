<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\DB;

class Movie extends Model
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory;

    public const TYPE_LIKE = 'like';
    public const TYPE_HATE = 'hate';

    /**
     * Include full description in the resource.
     * @var mixed|true
     */
    public bool $include_full_description = true;

    /**
     * The attributes that are mass assignable.
     * @var string[]
     */
    protected $fillable = [
        'title',
        'description',
        'user_id',
    ];

    /**
     * The attributes that should be cast.
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime'
    ];

    /**
     * Get the user that created the movie.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The users that like or hate the movie.
     */
    public function opinions(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'movie_user_opinion')
            ->withPivot('type')
            ->withTimestamps();
    }

    public function scopeByUser($query, $userId)
    {
        return $query->where('user_id', $userId);
    }

    /**
     * Scope a query to order movies by likes count.
     */
    public function scopeOrderByLikes($query)
    {
        return $query->select('movies.*')
            ->withCount(['opinions as likes_count' => function ($query) {
                $query->where('type', self::TYPE_LIKE);
            }])
            ->orderBy('likes_count', 'desc')
            ->orderBy('created_at', 'desc');
    }

    /**
     * Scope a query to order movies by hates count.
     */
    public function scopeOrderByHates($query)
    {
        return $query->select('movies.*')
            ->withCount(['opinions as hates_count' => function ($query) {
                $query->where('type', self::TYPE_HATE);
            }])
            ->orderBy('hates_count', 'desc')
            ->orderBy('created_at', 'desc');
    }
}
