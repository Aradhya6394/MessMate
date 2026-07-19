import backgroundImage from "../assets/images/cafeteria-bg.png";
import LoginCard from "../components/LoginCard";

function Login() {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Main Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-between px-20">

                {/* Left Section */}
                <div className="max-w-xl text-white">

                    <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm backdrop-blur-md">
                        🍽 Smart Hostel Dining
                    </span>

                    <h1 className="mt-6 text-7xl font-bold">
                        MessMate
                    </h1>

                    <h2 className="mt-4 text-5xl font-semibold leading-tight">
                        Simplify Your Hostel
                        <br />
                        Mess Experience
                    </h2>

                    <p className="mt-8 text-xl leading-9 text-white/90">
                        Manage meals, attendance, complaints and daily menus
                        from one modern platform designed for students and
                        hostel administrators.
                    </p>

                </div>

                {/* Right Section */}
                <LoginCard />

            </div>
        </div>
    );
}

export default Login;