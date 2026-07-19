import { useNavigate } from "react-router-dom";

import {
    FiUserPlus,
    FiCalendar,
    FiCoffee,
    FiBell,
} from "react-icons/fi";

function QuickActions() {

    const navigate = useNavigate();

    const actions = [

        {
            title: "Add Student",
            icon: <FiUserPlus />,
            color: "bg-blue-100",
            text: "text-blue-600",
            path: "/students",
        },

        {
            title: "Attendance",
            icon: <FiCalendar />,
            color: "bg-green-100",
            text: "text-green-600",
            path: "/attendance",
        },

        {
            title: "Update Menu",
            icon: <FiCoffee />,
            color: "bg-orange-100",
            text: "text-orange-600",
            path: "/menu",
        },

        {
            title: "Add Notice",
            icon: <FiBell />,
            color: "bg-red-100",
            text: "text-red-600",
            path: "/notices",
        },

    ];

    return (

        <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-8">

            <h2 className="text-2xl font-bold text-stone-800 mb-6">

                Quick Actions

            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                {

                    actions.map((action, index) => (

                        <button
                            key={index}
                            onClick={() => navigate(action.path)}
                            className="group rounded-2xl border border-stone-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 p-6"
                        >

                            <div
                                className={`w-14 h-14 rounded-2xl ${action.color} flex items-center justify-center mx-auto`}
                            >

                                <div
                                    className={`text-2xl ${action.text}`}
                                >

                                    {action.icon}

                                </div>

                            </div>

                            <p className="mt-4 font-semibold text-stone-700 group-hover:text-orange-600">

                                {action.title}

                            </p>

                        </button>

                    ))

                }

            </div>

        </div>

    );

}

export default QuickActions;