import { Link, usePage } from "@inertiajs/react";
import "@css/Components/Movies/pagination.css";

export default function Pagination({ links }) {
    const { search_user, sort } = usePage().props;

    function getClassName(active) {
        if (active) {
            return "page-item active";
        } else {
            return "page-item";
        }
    }

    function getUrlWithParams(url) {
        const urlObj = new URL(url, window.location.origin);
        if (search_user) {
            urlObj.searchParams.set("user", search_user);
        }
        if (sort) {
            urlObj.searchParams.set("sort", sort);
        }
        return urlObj.toString();
    }

    function getLabel(label) {
        return label.replaceAll("&laquo;", "").replaceAll("&raquo;", "");
    }

    return (
        links.length > 3 && (
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    {links.map((link, index) =>
                        link.url === null ? (
                            <li
                                key={`${link.label}-${index}`}
                                className="page-item disabled"
                            >
                                <span className="page-link">
                                    {getLabel(link.label)}
                                </span>
                            </li>
                        ) : (
                            <li
                                key={`${link.label}-${index}`}
                                className={getClassName(link.active)}
                            >
                                <Link
                                    className="page-link"
                                    href={getUrlWithParams(link.url)}
                                >
                                    {getLabel(link.label)}
                                </Link>
                            </li>
                        ),
                    )}
                </ul>
            </nav>
        )
    );
}
