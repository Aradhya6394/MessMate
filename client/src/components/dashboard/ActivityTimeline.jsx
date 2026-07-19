import { useEffect, useState } from "react";

import {
    FiUser,
    FiCoffee,
    FiBell,
    FiAlertCircle,
    FiCalendar,
    FiEdit,
    FiTrash2,
} from "react-icons/fi";

import { getActivities } from "../../services/activityService";

function ActivityTimeline() {

    const [activities, setActivities] = useState([]);

    useEffect(() => {

        fetchActivities();

    }, []);

    const fetchActivities = async () => {

        try {

            const data = await getActivities();

            setActivities(data);

        } catch (error) {

            console.log(error);

        }

    };

    const getIcon = (icon) => {

        switch (icon) {

            case "user":
                return <FiUser />;

            case "coffee":
                return <FiCoffee />;

            case "bell":
                return <FiBell />;

            case "alert":
                return <FiAlertCircle />;

            case "calendar":
                return <FiCalendar />;

            case "edit":
                return <FiEdit />;

            case "delete":
                return <FiTrash2 />;

            default:
                return <FiBell />;

        }

    };

    const getColor = (type) => {

        switch (type) {

            case "Student":
                return "bg-blue-100 text-blue-600";

            case "Menu":
                return "bg-orange-100 text-orange-600";

            case "Complaint":
                return "bg-red-100 text-red-600";

            case "Notice":
                return "bg-purple-100 text-purple-600";

            case "Attendance":
                return "bg-green-100 text-green-600";

            default:
                return "bg-gray-100 text-gray-600";

        }

    };

    const formatDate = (date) => {

        const d = new Date(date);

        return d.toLocaleString("en-IN", {

            dateStyle: "medium",

            timeStyle: "short",

        });

    };

    return (

        <div className="bg-white rounded-3xl border border-stone-200 shadow-lg p-8">

            <h2 className="text-2xl font-bold text-stone-800 mb-8">

                Recent Activity

            </h2>

            {

                activities.length === 0 ? (

                    <div className="text-center text-stone-500 py-10">

                        No Recent Activity

                    </div>

                ) : (

                    <div className="space-y-6">

                        {

                            activities.map((activity) => (

                                <div
                                    key={activity._id}
                                    className="flex items-start gap-5"
                                >

                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center ${getColor(activity.type)}`}
                                    >

                                        {getIcon(activity.icon)}

                                    </div>

                                    <div className="flex-1 border-b border-stone-100 pb-5">

                                        <div className="flex justify-between">

                                            <h3 className="font-semibold text-stone-800">

                                                {activity.title}

                                            </h3>

                                            <span className="text-xs text-stone-400">

                                                {formatDate(activity.createdAt)}

                                            </span>

                                        </div>

                                        <p className="text-stone-500 mt-2">

                                            {activity.description}

                                        </p>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default ActivityTimeline;