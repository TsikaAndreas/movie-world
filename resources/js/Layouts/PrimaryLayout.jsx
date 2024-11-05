import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "@/Components/General/ApplicationLogoDark.jsx";
import Sidebar from "@/Components/General/Sidebar.jsx";

export default function PrimaryLayout({ children }) {
    let copyRightYear = new Date().getFullYear();
    let copyRight = `© ${copyRightYear} ${usePage().props.app.name}`;

    const { auth } = usePage().props;

    const userFullName = auth.user
        ? `${auth.user.first_name} ${auth.user.last_name}`
        : "";

    return (
        <div className="primary-bg page-wrapper d-flex flex-column min-vh-100">
            <header className="d-flex justify-content-between align-items-center px-3">
                <Link href="/" className="app-logo">
                    <ApplicationLogo />
                </Link>
                <div>
                    {auth.user ? (
                        <nav>
                            <span>Welcome back, </span>
                            <span className="text-primary">{userFullName}</span>
                        </nav>
                    ) : (
                        <div>
                            <Link
                                href="/login"
                                className="btn btn-outline-primary me-2"
                            >
                                Log in
                            </Link>
                            or
                            <Link
                                href="/signup"
                                className="btn btn-primary ms-2"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            </header>
            {auth.user && <Sidebar />}
            <main className="primary-content page-content flex-grow-1 d-flex justify-content-center mt-5">
                {children}
            </main>
            <footer className="text-center">
                <p className="text-dark">{copyRight}</p>
            </footer>
        </div>
    );
}
