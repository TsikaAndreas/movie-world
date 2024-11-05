<?php

namespace App\Http\Controllers;

use App\Http\Requests\MovieRequest;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use App\Services\MovieService;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    /**
     * The movie service instance.
     */
    protected MovieService $movieService;

    /**
     * Create a new controller instance.
     */
    public function __construct(MovieService $movieService)
    {
        $this->movieService = $movieService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): \Inertia\Response|\Inertia\ResponseFactory
    {
        $sort = $request->query('sort', MovieService::DEFAULT_SORT);
        if (!in_array($sort, MovieService::SORT_KEYS, true)) {
            $sort = MovieService::DEFAULT_SORT;
        }

        $user = $request->query('user');
        if (!is_int($user) && !is_numeric($user)) {
            $user = null;
        } else {
            $user = (int) $user;
        }

        $data = [
            'sort' => $sort,
            'user' => $user,
        ];

        [$movies, $movies_count] = $this->movieService->getMovies($data);

        return inertia('Home', [
            'movies' => MovieResource::collection($movies)->response()->getData(),
            'movies_count' => $movies_count,
            'sort' => $sort,
            'search_user' => $user,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): \Inertia\Response|\Inertia\ResponseFactory
    {
        return inertia('Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MovieRequest $request): \Illuminate\Http\RedirectResponse
    {
        $data = $request->validated();
        $data['user_id'] = auth()->id();

        Movie::create($data);

        return redirect()->route('home')->with('success', 'Movie created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie): \Inertia\Response|\Inertia\ResponseFactory
    {
        $movie->include_full_description = true;

        return inertia('Movie/Show', [
            'movie' => new MovieResource($movie),
        ]);
    }

    /**
     * Update the specified resource.
     */
    public function opinion(Movie $movie, string $type): \Illuminate\Http\RedirectResponse
    {
        $result = $this->movieService->updateMovieOpinion($movie, $type);

        if (!$result) {
            return back()->with('error', 'Invalid opinion type.');
        }

        return back()->with('success', 'Opinion updated successfully.');
    }
}
