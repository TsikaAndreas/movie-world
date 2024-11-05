import { usePage } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import PrimaryLayout from "@/Layouts/PrimaryLayout.jsx";

export default function BaseLayout({ children, name }) {
    return name.startsWith("Auth/") ? (
        <GuestLayout>{children}</GuestLayout>
    ) : (
        <PrimaryLayout>{children}</PrimaryLayout>
    );
}
