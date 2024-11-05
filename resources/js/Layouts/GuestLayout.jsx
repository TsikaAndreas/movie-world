import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "@/Components/General/ApplicationLogoLight.jsx";

export default function Guest({ children }) {
    let copyRightYear = new Date().getFullYear();
    let copyRight = `© ${copyRightYear} ${usePage().props.app.name}`;

    return (
        <div className="guest-bg d-flex flex-column min-vh-100">
            <header className="d-flex justify-content-center py-3">
                <Link href="/" className="app-logo">
                    <ApplicationLogo />
                </Link>
            </header>
            <main className="guest-content flex-grow-1 d-flex align-items-center justify-content-center mt-5">
                {children}
            </main>

            <footer className="d-flex justify-content-center py-3">
                <p className="text-white">{copyRight}</p>
            </footer>
        </div>
    );
}
