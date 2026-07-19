function StatCard({
    title,
    value,
    subtitle,
    icon,
    color,
    bgColor,
}) {

    return (

        <div className="bg-white rounded-3xl border border-stone-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

            <div
                className="h-2"
                style={{
                    backgroundColor: color,
                }}
            />

            <div className="p-6">

                <div className="flex justify-between items-center">

                    <div>

                        <p className="text-stone-500">

                            {title}

                        </p>

                        <h1 className="text-5xl font-bold text-stone-800 mt-3">

                            {value}

                        </h1>

                        <p className="text-stone-400 mt-2">

                            {subtitle}

                        </p>

                    </div>

                    <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                        style={{
                            backgroundColor: bgColor,
                            color: color,
                        }}
                    >

                        {icon}

                    </div>

                </div>

            </div>

        </div>

    );

}

export default StatCard;