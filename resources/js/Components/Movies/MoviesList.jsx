import { usePage } from "@inertiajs/react";
import MovieCard from "@/Components/Movies/MovieCard.jsx";
import Pagination from "@/Components/Movies/Pagination.jsx";

export default function MoviesList() {
    const { movies, movies_count } = usePage().props;

    return (
        <>
            <div className="movies-counter mb-3">
                <h5>Found {movies_count} movies</h5>
            </div>

            <div className="movies-list">
                {movies.data.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <Pagination links={movies.meta.links} />
        </>
    );
}
