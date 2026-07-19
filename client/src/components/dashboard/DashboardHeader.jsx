function DashboardHeader() {

    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const hour = today.getHours();

    let greeting = "Good Evening";

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return (

        <div className="flex justify-between items-center mb-10">

            <div>

                <h1 className="text-5xl font-bold text-stone-800">

                    {greeting},

                    <span className="text-amber-600">
                        {" "}Aradhya
                    </span>

                </h1>

                <p className="text-lg text-stone-500 mt-3">
                    Manage students, attendance, menu and complaints from one place.
                </p>

            </div>

            <div className="rounded-2xl bg-white border border-stone-200 px-8 py-5 shadow-md">

                <p className="text-stone-600 font-medium">

                    {formattedDate}

                </p>

            </div>

        </div>

    );

}

export default DashboardHeader;