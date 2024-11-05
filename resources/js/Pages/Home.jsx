import MoviesList from "@/Components/Movies/MoviesList.jsx";
import Filters from "@/Components/Movies/Filters.jsx";
import "@css/Pages/home.css";
import { Link, usePage } from "@inertiajs/react";

export default function Home() {
    const { auth } = usePage().props;

    return (
        <div className="home-container">
            <aside className="aside-content">
                {auth.user && (
                    <div className="create-movie mb-4">
                        <Link href="/movies/create" className="btn btn-success">
                            New Movie
                        </Link>
                    </div>
                )}
                <Filters />
            </aside>
            <main className="main-content">
                <MoviesList />
            </main>
        </div>
    );
}
