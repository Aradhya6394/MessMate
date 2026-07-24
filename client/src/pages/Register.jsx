import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { registerUser } from "../services/userService";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            return toast.error("Please fill all fields");
        }

        if (formData.password !== formData.confirmPassword) {
            return toast.error("Passwords do not match");
        }

        try {
            setLoading(true);

            await registerUser({
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            toast.success("Registration Successful");

            navigate("/login");

        } 
        catch (error) {
            console.log(JSON.stringify(error.response?.data, null, 2));
            console.log("STATUS:", error.response?.status);

            toast.error("Registration Failed");
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">

            <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">

                <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
                    Create Account
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
                    >
                        {loading ? "Creating Account..." : "Register"}
                    </button>

                </form>

                <p className="text-center mt-6 text-stone-600">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-orange-500 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default Register;