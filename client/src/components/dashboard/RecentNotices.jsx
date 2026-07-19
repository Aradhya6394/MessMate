function RecentNotices({ notices }) {

    return (

        <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-8">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold">

                    Latest Notices

                </h2>

                <span className="text-orange-500 font-semibold">

                    {notices.length} Notices

                </span>

            </div>

            {

                notices.length === 0 ? (

                    <div className="text-stone-500">

                        No Notices Available

                    </div>

                ) : (

                    notices.map((notice) => (

                        <div
                            key={notice._id}
                            className="border-b last:border-0 py-4"
                        >

                            <div className="flex justify-between">

                                <div>

                                    <h3 className="font-semibold">

                                        {notice.title}

                                    </h3>

                                    <p className="text-stone-500 mt-1">

                                        {notice.description.substring(0,80)}...

                                    </p>

                                </div>

                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-semibold

                                    ${
                                        notice.priority==="High"

                                        ? "bg-red-100 text-red-600"

                                        : notice.priority==="Medium"

                                        ? "bg-yellow-100 text-yellow-700"

                                        : "bg-green-100 text-green-700"

                                    }`}
                                >

                                    {notice.priority}

                                </span>

                            </div>

                        </div>

                    ))

                )

            }

        </div>

    );

}

export default RecentNotices;