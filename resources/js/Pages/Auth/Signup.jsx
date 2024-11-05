import { useState } from "react";
import { router, usePage, Link } from "@inertiajs/react";
import "@css/Pages/auth.css";
import AuthInput from "@/Components/Auth/Input";
import SubmitButton from "@/Components/Auth/Button.jsx";
import { Head } from "@inertiajs/react";

const Signup = () => {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
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
        router.post("/register", values);
    }

    return (
        <>
            <Head title="Register" />
            <div className="auth-container d-flex flex-column align-items-center justify-content-center">
                <header className="mb-4 text-white h2">Sign Up</header>
                <form onSubmit={handleSubmit} className="form-container">
                    <AuthInput
                        id="first_name"
                        label="First Name"
                        value={values.first_name}
                        onChange={handleChange}
                        error={errors.first_name}
                    />
                    <AuthInput
                        id="last_name"
                        label="Last Name"
                        value={values.last_name}
                        onChange={handleChange}
                        error={errors.last_name}
                    />
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
                    <AuthInput
                        id="password_confirmation"
                        label="Password Confirmation"
                        type="password"
                        value={values.password_confirmation}
                        onChange={handleChange}
                        error={errors.password_confirmation}
                    />
                    <SubmitButton label="Sign Up" />
                </form>
                <div className="mt-3">
                    Already have an account?
                    <Link href="/login" className="auth-link text-white ms-1">
                        Login here
                    </Link>
                </div>
            </div>
        </>
    );
};

// Register.layout = (page) => <Guest children={page} />;

export default Signup;
