function Button({ text, onClick }) {

    return (

        <button
            onClick={onClick}
            className="w-full rounded-xl bg-orange-500 py-4 text-white font-semibold hover:bg-orange-600 transition"
        >
            {text}
        </button>

    );
}

export default Button;