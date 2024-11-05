<?php

namespace App\Services;

use App\Models\Movie;

class MovieService
{
    /**
     * Permitted sort keys.
     */
    public const SORT_KEYS = ['date', 'likes', 'hates'];

    /**
     * Default sort key.
     */
    public const DEFAULT_SORT = 'date';

    /**
     * Get sorted movies.
     *
     * @param array $data
     * - sort: string
     * - user: int|null
     * @return array
     * - movies query
     * - movies_count int
     */
    public function getMovies(array $data): array
    {
        $movies = Movie::query();

        if ($data['user']) {
            $movies->byUser($data['user']);
        }

        $movies = match ($data['sort']) {
            'likes' => $movies->orderByLikes(),
            'hates' => $movies->orderByHates(),
            default => $movies->latest('created_at'),
        };

        $movies_count = $movies->count();

        return [$movies->paginate(10)->onEachSide(1), $movies_count];
    }

    public function updateMovieOpinion(Movie $movie, string $type): bool
    {
        if (!in_array($type, [Movie::TYPE_LIKE, Movie::TYPE_HATE], true)) {
            return false;
        }

        $user_id = auth()->id();
        $opinion = $movie->opinions()->wherePivot('user_id', $user_id)->first();

        if ($opinion) {
            if ($opinion->pivot->type === $type) {
                $movie->opinions()->detach($user_id);
            } else {
                $movie->opinions()->updateExistingPivot($user_id, ['type' => $type]);
            }
        } else {
            $movie->opinions()->attach($user_id, ['type' => $type]);
        }

        return true;
    }
}
