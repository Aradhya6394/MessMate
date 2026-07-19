import { FiAlertCircle } from "react-icons/fi";

function RecentComplaints({ complaints }) {

    return (

        <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-8">

            <div className="flex justify-between items-center mb-6">

                <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">

                        <FiAlertCircle className="text-red-600 text-2xl" />

                    </div>

                    <h2 className="text-2xl font-bold">

                        Recent Complaints

                    </h2>

                </div>

                <span className="text-red-500 font-semibold">

                    {complaints.length} Complaints

                </span>

            </div>

            {

                complaints.length === 0 ? (

                    <div className="text-center py-10 text-stone-500">

                        No Complaints Found

                    </div>

                ) : (

                    complaints.map((complaint) => (

                        <div
                            key={complaint._id}
                            className="border-b last:border-0 py-4"
                        >

                            <div className="flex justify-between items-center">

                                <div>

                                    <h3 className="font-semibold">

                                        {complaint.title}

                                    </h3>

                                    <p className="text-stone-500 text-sm mt-1">

                                        {complaint.student?.name || "Unknown Student"}

                                    </p>

                                </div>

                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-semibold
                                    ${
                                        complaint.status === "Pending"
                                            ? "bg-red-100 text-red-600"
                                            : complaint.status === "In Progress"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-green-100 text-green-700"
                                    }`}
                                >

                                    {complaint.status}

                                </span>

                            </div>

                        </div>

                    ))

                )

            }

        </div>

    );

}

export default RecentComplaints;