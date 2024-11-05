import "@css/Components/Movies/movie-card.css";
import { Link, usePage, router } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MovieCard({ movie }) {
    const { auth } = usePage().props;

    const userLiked = movie.user_opinion === "like";
    const userDisliked = movie.user_opinion === "hate";

    const handleLike = () => {
        router.post(`/movies/${movie.id}/like`);
    };

    const handleHate = () => {
        router.post(`/movies/${movie.id}/hate`);
    };

    return (
        <div className="movie-card card mb-3 p-3">
            <div className="row movie-card-header">
                <div className="col-12 col-lg-8">
                    <Link href={`/movies/${movie.id}`}>
                        <h5 className="movie-card-title">{movie.title}</h5>
                    </Link>
                </div>
                <div className="col-12 col-lg-4 text-lg-end">
                    <div className="movie-card-date">
                        <span className="me-1">Posted</span>
                        {new Date(movie.published_at).toLocaleDateString(
                            "en-GB",
                            {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            },
                        )}
                    </div>
                </div>
            </div>

            <div className="movie-card-body">
                <p>{movie.description}</p>
            </div>

            <div className="row movie-card-footer">
                <div className="order-2 order-lg-1 col-12 col-sm-6 col-lg-3 text-center text-sm-start movie-card-stats">
                    <span className={userLiked ? "text-success fw-bold" : ""}>
                        {movie.likes_count} likes
                    </span>
                    <span className="me-1 ms-1">|</span>
                    <span className={userDisliked ? "text-danger fw-bold" : ""}>
                        {movie.hates_count} hates
                    </span>
                </div>

                <div className="order-1 order-lg-2 col-12 col-sm-12 col-lg-4 text-center text-sm-start text-md-start movie-card-actions">
                    {auth.user && (
                        <>
                            <button
                                onClick={handleLike}
                                className={`btn ${userLiked ? "btn-success" : "btn-outline-success"} btn-sm`}
                            >
                                <FontAwesomeIcon
                                    icon="fa-solid fa-thumbs-up"
                                    className="me-1 like"
                                />
                                Like
                            </button>
                            <button
                                onClick={handleHate}
                                className={`btn ${userDisliked ? "btn-danger" : "btn-outline-danger"} btn-sm`}
                            >
                                Hate
                                <FontAwesomeIcon
                                    icon="fa-solid fa-thumbs-down"
                                    className="ms-1 dislike"
                                />
                            </button>
                        </>
                    )}
                </div>

                <div className="order-3 order-lg-3 col-12 col-sm-6 col-lg-5 text-center text-sm-end movie-card-posted-by text-muted">
                    <span className="me-1">Posted by</span>
                    <Link
                        href={`/?user=${movie.user.id}`}
                        className="text-primary"
                    >
                        {auth.user && auth.user.id === movie.user.id
                            ? "You"
                            : `${movie.user.first_name} ${movie.user.last_name}`}
                    </Link>
                </div>
            </div>
        </div>
    );
}
