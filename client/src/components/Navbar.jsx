import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, X, ChevronDown, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("dashboard");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [showProfilePopup, setShowProfilePopup] = useState(false);

    const navItems = [
        { label: "Dashboard", id: "dashboard", subItems: [] },
        { label: "CRM", id: "crm", subItems: [] },
        {
            label: "Client",
            id: "client",
            subItems: ["Create Client", "Update Client"],
        },
        {
            label: "Transaction",
            id: "transcation",
            subItems: [
                "NFO",
                "Purchase",
                "Redeem",
                "Switch",
                "SIP",
                "STP",
                "SWP",
                "SIP cancellation",
            ],
        },
        {
            label: "General",
            id: "general",
            subItems: ["CEMCOM", "Investor login maintainace"],
        },
        { label: "Calculater", id: "Calculater", subItems: [] },
        {
            label: "Reports",
            id: "reports",
            subItems: ["Monthly Report", "Yearly Report"],
        },
        { label: "Contact", id: "contact", subItems: [] },
        { label: "FAQ", id: "faq", subItems: [] },
    ];

    const makeSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="relative text-white">
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}
            {/* top navbar */}
            <div className="bg-gray-900 px-6 py-3 flex justify-between items-center z-50 relative">
                <div className="text-xl font-bold text-white">Value Investing</div>

                <div className="flex items-center space-x-3 relative">
                    {/* Avatar with Hover */}
                    <div
                        className="relative"
                        onMouseEnter={() => setShowProfilePopup(true)}
                        onMouseLeave={() => setShowProfilePopup(false)}
                    >
                        <img
                            src="https://i.pravatar.cc/40"
                            alt="Avatar"
                            className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer"
                        />

                        {/* Animated Popup */}
                        <AnimatePresence>
                            {showProfilePopup && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-12 right-0 bg-gray-900 shadow-lg rounded-tl-xl rounded-br-xl px-4 py-3 w-48 z-50 border border-gray-700"
                                >
                                    <div className="text-sm font-semibold text-white">YASH HEMENDRA GANDHI</div>
                                    <div className="mt-2">
                                        <button
                                            onClick={() => alert("Viewing Profile...")}
                                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                                        >
                                            <User size={16} />
                                            View Profile
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Name + Logout */}
                    <span className="text-sm font-semibold text-white hidden md:inline">YASH HEMENDRA GANDHI</span>
                    <button
                        className="hover:text-red-500 text-white"
                        onClick={() => alert("Logging out...")}
                    >
                        <LogOut size={20} />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white ml-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        ☰
                    </button>
                </div>
            </div>


            {/* Desktop Menu */}
            <div className="bg-gray-800 hidden md:flex md:justify-center px-4 py-2 space-x-6">
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        className="relative group"
                        onMouseEnter={() => setOpenDropdown(item.id)}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        {item.subItems.length === 0 ? (
                            <Link
                                to={`/${item.id}`}
                                onClick={() => setActiveLink(item.id)}
                                className={`text-sm font-medium hover:text-blue-400 ${activeLink === item.id ? "text-blue-400 underline" : "text-white"}`}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <>
                                <button
                                    className={`flex items-center space-x-1 text-sm font-medium hover:text-blue-400 ${activeLink === item.id ? "text-blue-400 underline" : "text-white"}`}
                                >
                                    <span>{item.label}</span>
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-200 group-hover:rotate-180 ${openDropdown === item.id ? "rotate-180" : "rotate-0"}`}
                                    />
                                </button>
                                <div className="absolute top-full left-0 mt-1 bg-gray-700 rounded-tl-xl rounded-br-xl shadow-lg py-2 w-48 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                                    {item.subItems.map((subItem, i) => (
                                        <Link
                                            key={i}
                                            to={`/${item.id}/${makeSlug(subItem)}`}
                                            className="block px-4 py-2 text-sm hover:bg-gray-600"
                                        >
                                            {subItem}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-900 transform transition-transform duration-300 z-50 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-6 space-y-4 relative h-full">
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
                        <span className="text-sm font-semibold">YASH HEMENDRA GANDHI</span>
                        <button
                            className="hover:text-red-500"
                            onClick={() => alert("Logging out...")}
                        >
                            <LogOut size={20} />
                        </button>
                    </div>

                    {navItems.map((item) => (
                        <div key={item.id}>
                            {item.subItems.length === 0 ? (
                                <Link
                                    to={`/${item.id}`}
                                    onClick={() => {
                                        setActiveLink(item.id);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`block text-sm py-1 font-medium hover:text-blue-400 ${activeLink === item.id
                                        ? "text-blue-400 underline"
                                        : "text-white"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <div>
                                    <button
                                        onClick={() =>
                                            setOpenDropdown(
                                                openDropdown === item.id ? null : item.id
                                            )
                                        }
                                        className="flex justify-between items-center w-full text-sm font-medium text-white"
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-200 ${openDropdown === item.id
                                                ? "rotate-180"
                                                : "rotate-0"
                                                }`}
                                        />
                                    </button>
                                    {openDropdown === item.id && (
                                        <div className="pl-4 pt-1">
                                            {item.subItems.map((subItem, i) => (
                                                <Link
                                                    key={i}
                                                    to={`/${item.id}/${makeSlug(subItem)}`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block text-sm text-gray-300 hover:text-white py-1"
                                                >
                                                    {subItem}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
