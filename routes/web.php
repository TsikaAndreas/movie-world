<?php

use App\Http\Controllers\MovieController;
use Illuminate\Support\Facades\Route;

// Only guest users can access the following routes
Route::middleware(['guest'])->group(function () {
    Route::inertia('/login', 'Auth/Login')->name('login');
    Route::inertia('/signup', 'Auth/Signup')->name('signup');
});

// Only authenticated users can access the following routes
Route::middleware(['auth'])->group(function () {
    Route::get('/logout', function () {
        auth()->logout();
        return redirect('/login');
    });

    Route::post('/movies', [MovieController::class, 'store'])->name('movies.store');
    Route::get('/movies/create', [MovieController::class, 'create'])->name('movies.create');
    Route::post('/movies/{movie}/{type}', [MovieController::class, 'opinion'])->name('movies.like');
});

// Both guest and authenticated users can access the following routes
Route::get('/', [MovieController::class, 'index'])->name('home');
Route::get('/movies/{movie}', [MovieController::class, 'show'])->name('movies.show');

// Fallback route for non-existing routes
Route::fallback(function () {
    return to_route('home');
});
