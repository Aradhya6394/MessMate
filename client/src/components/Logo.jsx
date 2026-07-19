function Logo() {
    return (
        <div className="flex items-center gap-3">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-2xl shadow-lg">
                🍽
            </div>

            <div>

                <h1 className="text-2xl font-bold text-white">
                    MessMate
                </h1>

                <p className="text-sm text-white/70">
                    Hostel Management
                </p>

            </div>

        </div>
    );
}

export default Logo;