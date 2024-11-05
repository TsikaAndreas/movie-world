import { useState } from "react";
import { router, usePage, Link } from "@inertiajs/react";
import "@css/Pages/auth.css";
import AuthInput from "@/Components/Auth/Input";
import SubmitButton from "@/Components/Auth/Button.jsx";
import { Head } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout.jsx";

const Login = () => {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/login", values);
    }

    return (
        <>
            <Head title="Login" />
            <div className="auth-container d-flex flex-column align-items-center justify-content-center">
                <header className="mb-4 text-white h2">Login</header>
                <form onSubmit={handleSubmit} className="form-container">
                    <AuthInput
                        id="email"
                        label="Email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <AuthInput
                        id="password"
                        label="Password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        error={errors.password}
                    />
                    <SubmitButton label="Login" />
                </form>
                <div className="mt-3">
                    Don't have an account?
                    <Link href="/signup" className="auth-link text-white ms-1">
                        Sign Up here
                    </Link>
                </div>
            </div>
        </>
    );
};

// Login.layout = (page) => <Guest children={page} />;

export default Login;
