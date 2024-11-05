import "@css/Components/Movies/filters.css";
import { useState, useEffect } from "react";
import { router, usePage } from "@inertiajs/react";

export default function Filters() {
    const { sort: initialSort, search_user } = usePage().props;
    const [sort, setSort] = useState(initialSort || "date");

    useEffect(() => {
        setSort(initialSort || "date");
    }, [initialSort]);

    const handleSortChange = (event) => {
        const value = event.target.value;
        setSort(value);

        const searchQuery = {
            sort: value,
        };
        if (search_user) {
            searchQuery.user = search_user;
        }
        router.get("/", searchQuery, { preserveState: true });
    };

    return (
        <div className="filters">
            <div className="filter-title">
                <h5>Sort by</h5>
            </div>

            <div className="filter-options">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="sortOptions"
                        id="sortByLikes"
                        value="likes"
                        checked={sort === "likes"}
                        onChange={handleSortChange}
                    />
                    <label className="form-check-label" htmlFor="sortByLikes">
                        Likes
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="sortOptions"
                        id="sortByHates"
                        value="hates"
                        checked={sort === "hates"}
                        onChange={handleSortChange}
                    />
                    <label className="form-check-label" htmlFor="sortByHates">
                        Hates
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="sortOptions"
                        id="sortByDate"
                        value="date"
                        checked={sort === "date"}
                        onChange={handleSortChange}
                    />
                    <label className="form-check-label" htmlFor="sortByDate">
                        Date
                    </label>
                </div>
            </div>
        </div>
    );
}
