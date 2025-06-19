import React from 'react'

const Dashboard = () => {

    const data = [
        {
            name: "AUM",
            amount: 120000,
            gradient: "from-cyan-400 via-blue-500 to-purple-600",
            textColor: "text-white",
            shadow: "hover:shadow-cyan-500/40",
        },
        {
            name: "Investment",
            amount: 95000,
            gradient: "from-green-400 via-emerald-500 to-lime-500",
            textColor: "text-white",
            shadow: "hover:shadow-emerald-400/40",
        },
        {
            name: "Total Clients",
            amount: 320,
            gradient: "from-yellow-300 via-amber-400 to-orange-500",
            textColor: "text-black",
            shadow: "hover:shadow-amber-300/40",
        },
    ];

    return (
        <div className="bg-zinc-900 min-h-screen w-full pt-6 px-4 text-white">
            <div className="flex flex-wrap justify-center gap-4">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`relative rounded-xl w-64 h-32 p-4 overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 bg-gradient-to-br ${item.gradient} ${item.shadow}  hover:ring-offset-2`}
                    >
                        {/* Glassmorphism Overlay */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-xl pointer-events-none"></div>

                        {/* Shine Sweep Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine pointer-events-none" />

                        {/* Card Content */}
                        <div className={`relative z-10 flex flex-col items-center justify-center h-full text-center ${item.textColor}`}>
                            <div className="text-base font-semibold tracking-wide mb-1">{item.name}</div>
                            <div className="text-2xl font-bold tracking-tight mt-1">{item.amount.toLocaleString()}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard
