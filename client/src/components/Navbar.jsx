import { useState } from "react";
import { LogOut, X, ChevronDown } from "lucide-react";
import React from "react";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const navItems = [
        {
            label: "Client",
            id: "client",
            subItems: [
                "Create Client",
                "Update Client",
                "Search Client",
                "Delete Client"
            ]
        },
        {
            label: "Dashboard",
            id: "dashboard",
            subItems: [
                "Create Client",
                "Update Client",
                "Search Client",
                "Delete Client"
            ]
        },
        {
            label: "Transaction",
            id: "transcation",
            subItems: [
                "Create Client",
                "Update Client",
                "Search Client",
                "Delete Client"
            ]
        },
        {
            label: "SIP",
            id: "sip",
            subItems: [
                "Create Client",
                "Update Client",
                "Search Client",
                "Delete Client"
            ]
        },
        {
            label: "Calculater",
            id: "Calculater",
            subItems: [

            ]
        },
        {
            label: "Reports",
            id: "reports",
            subItems: ["Monthly Report", "Yearly Report"]
        },
        {
            label: "About",
            id: "about",
            subItems: []
        }
    ];

    return (
        <div className="relative  
         text-white">
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

            <div className="bg-gray-900 px-6 py-3 flex justify-between items-center z-50">
                <div className="text-xl font-bold">Value Investing</div>
                <div className="flex items-center space-x-3">
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="Avatar"
                        className="w-10 h-10 rounded-full border-2 border-blue-500"
                    />
                    <span className="text-sm font-semibold">Yash</span>
                    <button
                        className="hover:text-red-500"
                        onClick={() => alert("Logging out...")}
                    >
                        <LogOut size={20} />
                    </button>
                    <button
                        className="md:hidden text-white ml-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        ☰
                    </button>
                </div>
            </div>

            <div className="bg-gray-800 hidden md:flex md:justify-center md:items-center md:gap-2 px-4 py-2 space-x-6">
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        className="relative group"
                        onMouseEnter={() => setOpenDropdown(item.id)}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <button
                            onClick={() => {
                                setActiveLink(item.id);
                                setOpenDropdown(openDropdown === item.id ? null : item.id);
                            }}
                            className={`flex items-center space-x-1 text-sm font-medium hover:text-blue-400 ${activeLink === item.id ? "text-blue-400 underline" : "text-white"
                                }`}
                        >
                            <span>{item.label}</span>
                            {item.subItems.length > 0 && (
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-200 ${openDropdown === item.id ? "rotate-180" : "rotate-0"}`}
                                />
                            )}
                        </button>
                        {item.subItems.length > 0 && openDropdown === item.id && (
                            <div className="absolute top-full left-0 mt-1 bg-gray-700 rounded-lg shadow-lg py-2 w-48 z-50">
                                {item.subItems.map((subItem, idx) => (
                                    <div
                                        key={idx}
                                        className="block px-4 py-2 text-sm hover:bg-gray-600 cursor-pointer"
                                    >
                                        {subItem}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 flex flex-col space-y-4 h-full relative">
                    <button
                        className="absolute top-4 right-4 text-white hover:text-red-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X size={24} />
                    </button>
                    <div className="flex items-center space-x-3 mb-4 border-b border-gray-700 pb-4 pt-10">
                        <img
                            src="https://i.pravatar.cc/40"
                            alt="Avatar"
                            className="w-10 h-10 rounded-full border-2 border-blue-500"
                        />
                        <span className="text-sm font-semibold">Yash</span>
                        <button
                            className="hover:text-red-500"
                            onClick={() => alert("Logging out...")}
                        >
                            <LogOut size={20} />
                        </button>
                    </div>

                    {navItems.map((item) => (
                        <div key={item.id} className="space-y-1">
                            <button
                                onClick={() => {
                                    setActiveLink(item.id);
                                    setOpenDropdown(openDropdown === item.id ? null : item.id);
                                }}
                                className={`flex justify-between items-center w-full text-left text-sm font-medium hover:text-blue-400 ${activeLink === item.id ? "text-blue-400 underline" : "text-white"
                                    }`}
                            >
                                {item.label}
                                {item.subItems.length > 0 && (
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-200 ${openDropdown === item.id ? "rotate-180" : "rotate-0"}`}
                                    />
                                )}
                            </button>
                            {openDropdown === item.id && item.subItems.length > 0 && (
                                <div className="pl-4 space-y-1">
                                    {item.subItems.map((subItem, idx) => (
                                        <div
                                            key={idx}
                                            className="block text-sm text-gray-300 hover:text-white cursor-pointer"
                                        >
                                            {subItem}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}
