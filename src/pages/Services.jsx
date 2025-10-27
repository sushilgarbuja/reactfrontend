import { motion } from "framer-motion";
import { Code, PenTool, Video, Smartphone, Cpu, Globe } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
    const services = [
        {
            title: "Web Development",
            color: "from-indigo-500 to-purple-500",
            icon: <Globe size={28} />,
            desc: "We build responsive, high-performance websites using modern frameworks like React, Next.js, and Node.js.",
        },
        {
            title: "Graphics Designing",
            color: "from-pink-500 to-rose-500",
            icon: <PenTool size={28} />,
            desc: "Creative and professional graphic designs that make your brand stand out — logos, posters, and more.",
        },
        {
            title: "Video Editing",
            color: "from-blue-500 to-cyan-500",
            icon: <Video size={28} />,
            desc: "Professional video editing and motion graphics that tell your story with clarity and style.",
        },
        {
            title: "App Development",
            color: "from-green-500 to-emerald-500",
            icon: <Smartphone size={28} />,
            desc: "Cross-platform mobile apps built with the latest technologies for performance and scalability.",
        },
        {
            title: "AI & Automation",
            color: "from-yellow-500 to-orange-500",
            icon: <Cpu size={28} />,
            desc: "Integrate AI solutions and automation to make your business smarter and more efficient.",
        },
        {
            title: "Custom Coding / Bots",
            color: "from-teal-500 to-green-400",
            icon: <Code size={28} />,
            desc: "We create custom scripts and bots to automate tasks, scrape data, and improve productivity.",
        },
    ];

    return (
        <>
            <Navbar />

            {/* ✅ HERO SECTION */}
            <section
                className="relative flex items-center justify-center h-[100vh] w-full bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1950&q=80')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center text-white px-6 sm:px-8"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-center"
                    >
                        Our Services
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="text-base sm:text-lg md:text-2xl max-w-2xl mx-auto text-gray-200 leading-relaxed"
                    >
                        From web development to AI-powered automation — we provide
                        cutting-edge solutions to bring your ideas to life.
                    </motion.p>
                </motion.div>
            </section>

            {/* ✅ SERVICES SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-center"
                    >
                        What We Offer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-gray-600 mb-12 text-base sm:text-lg max-w-2xl mx-auto"
                    >
                        Explore our wide range of professional services crafted for
                        businesses and individuals in the tech era.
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300`}
                            >
                                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                                <div className="p-6 sm:p-8">
                                    <div className="flex justify-center text-indigo-600 mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        {service.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
