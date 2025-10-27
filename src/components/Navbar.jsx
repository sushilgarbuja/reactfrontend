import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
        { name: "Create Blog", path: "/create" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-md transition-all duration-300">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
                {/* ✅ Logo */}
                <Link to="/" className="flex items-center space-x-3">
                    {/* <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8 w-8"
                        alt="Logo"
                    /> */}
                    <span className="text-2xl font-semibold text-white tracking-wide">
                        Sushil<span className="text-blue-400">Blog</span>
                    </span>
                </Link>

                {/* ✅ Mobile Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white p-2 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* ✅ Desktop Nav */}
                <ul className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={`text-white text-base font-medium transition-all duration-300 hover:text-blue-400 ${location.pathname === link.path ? "text-blue-400" : ""
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ✅ Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
                    >
                        <ul className="flex flex-col items-center space-y-4 py-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        onClick={() => setIsOpen(false)}
                                        to={link.path}
                                        className={`block text-lg font-medium px-3 py-2 text-white transition hover:text-blue-400 ${location.pathname === link.path ? "text-blue-400" : ""
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
