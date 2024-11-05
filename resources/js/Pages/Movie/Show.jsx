import { Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Show() {
    const { data: movie } = usePage().props.movie;

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center text-primary">{movie.title}</h1>

            <div className="card p-4 shadow-sm border-0 rounded-3">
                <div className="mb-4">
                    <h5 className="fw-bold text-secondary">Description</h5>
                    <p className="text-muted">{movie.description}</p>
                </div>

                <div className="mb-4">
                    <h5 className="fw-bold text-secondary">Published At</h5>
                    <p className="text-muted">
                        {new Date(movie.published_at).toLocaleDateString(
                            "en-GB",
                            {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            },
                        )}
                    </p>
                </div>

                <div className="mb-4">
                    <h5 className="fw-bold text-secondary">Posted by</h5>
                    <Link
                        href={`/?user=${movie.user.id}`}
                        className="text-primary text-decoration-none"
                    >
                        {movie.user.first_name} {movie.user.last_name}
                    </Link>
                </div>

                <div className="d-flex justify-content-around pt-3 border-top">
                    <div className="text-center">
                        <FontAwesomeIcon
                            icon="fa-solid fa-thumbs-up"
                            className="text-success me-2"
                        />
                        <span className="fw-bold">{movie.likes_count}</span>
                    </div>
                    <div className="text-center">
                        <FontAwesomeIcon
                            icon="fa-solid fa-thumbs-down"
                            className="text-danger me-2"
                        />
                        <span className="fw-bold">{movie.hates_count}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
