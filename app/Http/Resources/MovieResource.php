<?php

namespace App\Http\Resources;

use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $current_user_opinion = null;

        if (Auth::check()) {
            $current_user_opinion = $this->opinions()
                ->wherePivot('user_id', Auth::id())
                ->first();
        }

        $description = $this->include_full_description
            ? $this->description
            : substr($this->description, 0, 200) . '...';


        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $description,
            'user' => new UserResource($this->user),
            'published_at' => $this->created_at,
            'likes_count' => $this->opinions()->where('movie_user_opinion.type', Movie::TYPE_LIKE)->count(),
            'hates_count' => $this->opinions()->where('movie_user_opinion.type', Movie::TYPE_HATE)->count(),
            'user_opinion' => $current_user_opinion ? $current_user_opinion->pivot->type : null,
        ];
    }
}
