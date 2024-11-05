import { useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApplicationLogo from "@/Components/General/ApplicationLogoLight.jsx";
import "@css/Components/General/sidebar.css";

export default function Sidebar(props) {
    useEffect(() => {
        const handleSidebarDropdownClick = (event) => {
            const element = event.target.closest(".sidebar-dropdown");
            const submenu = element.querySelector(".sidebar-submenu");

            if (element.classList.contains("active")) {
                element.classList.remove("active");
                submenu.style.display = "none";
            } else {
                element.classList.add("active");
                submenu.style.display = "block";
            }
        };

        const handleCloseSidebarClick = () => {
            document.querySelector(".page-wrapper").classList.remove("toggled");
        };

        const handleShowSidebarClick = () => {
            document.querySelector(".page-wrapper").classList.add("toggled");
        };

        document.querySelectorAll(".sidebar-dropdown").forEach((el) => {
            el.addEventListener("click", handleSidebarDropdownClick);
        });

        document
            .getElementById("close-sidebar")
            .addEventListener("click", handleCloseSidebarClick);
        document
            .getElementById("show-sidebar")
            .addEventListener("click", handleShowSidebarClick);
    }, []);

    return (
        <>
            <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
            </a>
            <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                    <div className="sidebar-brand">
                        <Link href="/">
                            <ApplicationLogo className="sidebar-logo" />
                        </Link>
                        <div id="close-sidebar">
                            <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
                        </div>
                    </div>
                    <div className="sidebar-header">
                        <div className="user-info">
                            <span className="user-name">
                                <div className="d-flex flex-column text-center">
                                    <span>Welcome back, </span>
                                    <div className="fw-bold text-light">
                                        {usePage().props.auth.user.first_name}{" "}
                                        {usePage().props.auth.user.last_name}
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="sidebar-menu">
                        <ul>
                            <li className="header-menu">
                                <span>General</span>
                            </li>
                            <li>
                                <Link href="/">
                                    <FontAwesomeIcon icon="fa-solid fa-house" />
                                    <span className="ms-2">Home</span>
                                </Link>
                            </li>
                            <li className="sidebar-dropdown">
                                <div className="justify-content-between">
                                    <span>
                                        <FontAwesomeIcon icon="fa-solid fa-film" />
                                        <span className="ms-2">Movies</span>
                                    </span>
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-chevron-right"
                                        className="sidebar-dropdown-icon"
                                    />
                                </div>
                                <div className="sidebar-submenu">
                                    <ul>
                                        <li>
                                            <Link href="/movies/create">
                                                <FontAwesomeIcon icon="fa-solid fa-clapperboard" />
                                                <span className="ms-2">
                                                    Create
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="sidebar-footer">
                    <Link href="/logout" method="post" as="button">
                        <FontAwesomeIcon
                            icon="fa-solid fa-power-off"
                            className="me-2"
                        />
                        Logout
                    </Link>
                </div>
            </nav>
        </>
    );
}
