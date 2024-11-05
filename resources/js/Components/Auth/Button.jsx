export default function Button({ label }) {
    return (
        <button type="submit" className="btn btn-danger w-100">
            {label}
        </button>
    );
}
