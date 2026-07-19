import { FaEnvelope, FaLock } from "react-icons/fa";

function InputField({
    icon,
    type,
    placeholder,
    value,
    onChange
}) {

    return (

        <div className="flex items-center rounded-xl bg-white px-4 py-4 shadow-md">

            {icon === "email" ? (
                <FaEnvelope className="mr-3 text-gray-400" />
            ) : (
                <FaLock className="mr-3 text-gray-400" />
            )}

            <input
                className="w-full bg-transparent outline-none"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />

        </div>

    );
}

export default InputField;