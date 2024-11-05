import "./bootstrap";
import "bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Layout from "@/Layouts/BaseLayout.jsx";
import "@/Utils/fontawesome.js";

const appProps = JSON.parse(document.getElementById("app").dataset.page).props;
const appName = appProps.app.name || "MovieWorld";

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout =
            page.default.layout ||
            ((page) => <Layout children={page} name={name} />);
        return page;
    },
    setup({ el, App, props }) {
        delete el.dataset.page;
        createRoot(el).render(<App {...props} />);
    },
    progress: { showSpinner: true, color: "red" },
});
