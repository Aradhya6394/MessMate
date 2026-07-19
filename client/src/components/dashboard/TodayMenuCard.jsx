import { FiCoffee } from "react-icons/fi";

function TodayMenuCard({ menu }) {

    if (!menu) {
        return (
            <div className="bg-white rounded-3xl border border-stone-200 shadow-lg p-8">

                <h2 className="text-2xl font-bold mb-6">
                    Today's Menu
                </h2>

                <div className="text-center py-10 text-stone-500">
                    No Menu Available
                </div>

            </div>
        );
    }

    return (

        <div className="bg-white rounded-3xl border border-stone-200 shadow-lg p-8">

            <div className="flex items-center gap-4 mb-6">

                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">

                    <FiCoffee className="text-orange-500 text-2xl" />

                </div>

                <div>

                    <h2 className="text-2xl font-bold text-stone-800">

                        Today's Menu

                    </h2>

                    <p className="text-stone-500">

                        {menu.day}

                    </p>

                </div>

            </div>

            <div className="space-y-4">

                <div className="bg-orange-50 rounded-2xl p-4">

                    <h4 className="font-semibold text-orange-600">
                        Breakfast
                    </h4>

                    <p className="text-stone-700 mt-1">
                        {menu.breakfast}
                    </p>

                </div>

                <div className="bg-green-50 rounded-2xl p-4">

                    <h4 className="font-semibold text-green-600">
                        Lunch
                    </h4>

                    <p className="text-stone-700 mt-1">
                        {menu.lunch}
                    </p>

                </div>

                <div className="bg-blue-50 rounded-2xl p-4">

                    <h4 className="font-semibold text-blue-600">
                        Dinner
                    </h4>

                    <p className="text-stone-700 mt-1">
                        {menu.dinner}
                    </p>

                </div>

            </div>

        </div>

    );
}

export default TodayMenuCard;