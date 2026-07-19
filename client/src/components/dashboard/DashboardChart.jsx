import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const COLORS = [
    "#3B82F6",
    "#22C55E",
    "#F97316",
    "#EF4444",
];

function DashboardChart({ dashboard }) {

    const data = [
        {
            name: "Students",
            value: dashboard.totalStudents,
        },
        {
            name: "Attendance",
            value: dashboard.todayAttendance,
        },
        {
            name: "Menus",
            value: dashboard.totalMenus,
        },
        {
            name: "Complaints",
            value: dashboard.pendingComplaints,
        },
    ];

    return (

        <div className="bg-white rounded-3xl border border-stone-200 shadow-lg p-8">

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h2 className="text-2xl font-bold text-stone-800">

                        System Overview

                    </h2>

                    <p className="text-stone-500">

                        Overall mess statistics

                    </p>

                </div>

            </div>

            <div className="h-[360px]">

                <ResponsiveContainer>

                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={120}
                            paddingAngle={4}
                        >

                            {data.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />

                            ))}

                        </Pie>

                        <Tooltip />

                        <Legend
                            verticalAlign="bottom"
                            height={36}
                        />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default DashboardChart;