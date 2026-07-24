import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Logo from "./Logo";
import InputField from "./InputField";
import Button from "./Button";

import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function LoginCard() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            const data = await loginUser(email, password);

            login(data.token, data.user);

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            alert(
                error.response?.data?.message || "Login Failed"
            );

        }

    };

    return (

        <div className="w-[430px] rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-10">

            <Logo />

            <h2 className="text-3xl font-bold text-white mt-6">
                Welcome Back 👋
            </h2>

            <p className="text-white/80 mt-2 mb-8">
                Sign in to continue to MessMate
            </p>

            <div className="space-y-5">

                <InputField
                    icon="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputField
                    icon="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

            </div>

            <div className="flex justify-between items-center text-white text-sm mt-6">

                <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember Me
                </label>

                <a href="#" className="hover:underline">
                    Forgot Password?
                </a>

            </div>

            <div className="mt-8">
                <Button
                    text="Login"
                    onClick={handleLogin}
                />
            </div>

            {/* Register Link */}
            <div className="mt-6 text-center text-white">

                <span className="text-white/80">
                    Don't have an account?{" "}
                </span>

                <Link
                    to="/register"
                    className="font-semibold text-orange-300 hover:text-orange-200 transition"
                >
                    Register
                </Link>

            </div>

        </div>

    );
}

export default LoginCard;