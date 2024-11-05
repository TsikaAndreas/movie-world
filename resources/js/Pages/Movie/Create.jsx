import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors } = useForm({
        title: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/movies");
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Create New Movie</h1>
            <form
                onSubmit={handleSubmit}
                className="p-4 border rounded bg-light shadow-sm"
            >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-bold">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className={`form-control ${errors.title ? "is-invalid" : ""}`}
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        placeholder="Enter movie title"
                    />
                    {errors.title && (
                        <div className="invalid-feedback">{errors.title}</div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label fw-bold">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className={`form-control ${errors.description ? "is-invalid" : ""}`}
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        placeholder="Enter movie description"
                        rows="4"
                    />
                    {errors.description && (
                        <div className="invalid-feedback">
                            {errors.description}
                        </div>
                    )}
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-success">
                        Create Movie
                    </button>
                </div>
            </form>
        </div>
    );
}
