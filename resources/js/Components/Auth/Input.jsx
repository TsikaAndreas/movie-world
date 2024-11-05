import { useState } from "react";
import "@css/Pages/auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Input({
    id,
    label,
    type = "text",
    value,
    onChange,
    error,
}) {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label text-white">
                {label}
            </label>
            <div className="position-relative">
                <input
                    id={id}
                    type={type === "password" && showPassword ? "text" : type}
                    value={value}
                    onChange={onChange}
                    className="form-control"
                    placeholder={`Your ${label.toLowerCase()}...`}
                />
                {type === "password" && (
                    <span
                        className="auth-password position-absolute top-50 end-0 me-3 text-dark"
                        onClick={handleTogglePasswordVisibility}
                        style={{ cursor: "pointer" }}
                    >
                        {showPassword ? (
                            <FontAwesomeIcon icon="fa-solid fa-eye-slash" />
                        ) : (
                            <FontAwesomeIcon icon="fa-solid fa-eye" />
                        )}
                    </span>
                )}
            </div>
            {error && <div className="text-danger mt-1">{error}</div>}
        </div>
    );
}
