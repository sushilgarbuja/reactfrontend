import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MessageSquare, Phone } from "lucide-react";

function Contact() {
    return (
        <>
            <Navbar />

            {/* ✅ HERO SECTION */}
            <section
                className="relative flex items-center justify-center h-[80vh] md:h-screen bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1526378722484-cc0c1b1b5c8f?auto=format&fit=crop&w=1920&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black/70"></div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center text-white px-4 sm:px-6"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
                    >
                        Get In Touch
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="text-base sm:text-lg md:text-2xl max-w-2xl md:max-w-3xl mx-auto leading-relaxed text-gray-200"
                    >
                        Have a question or want to collaborate? Let’s connect and bring your
                        ideas to life together.
                    </motion.p>
                </motion.div>
            </section>

            {/* ✅ CONTACT SECTION */}
            <section className="bg-gray-50 py-16 sm:py-20 font-[Poppins]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-center"
                    >
                        Let's Connect
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-gray-600 text-center mb-12 text-base sm:text-lg max-w-2xl mx-auto"
                    >
                        Whether you’re looking for a collaboration, have a question, or just
                        want to say hi — we’d love to hear from you!
                    </motion.p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Left Info Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8 text-center lg:text-left"
                        >
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                    Contact Information
                                </h3>
                                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                    We’re always available to help. Reach out via the form or
                                    contact us directly through any of the channels below.
                                </p>
                            </div>

                            <div className="space-y-5">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-3">
                                    <Phone className="text-indigo-500 mx-auto sm:mx-0" size={24} />
                                    <span className="text-gray-800 text-base sm:text-lg font-medium">
                                        +977 9812345678
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-3">
                                    <Mail className="text-indigo-500 mx-auto sm:mx-0" size={24} />
                                    <a
                                        href="mailto:contact@example.com"
                                        className="text-gray-800 text-base sm:text-lg font-medium hover:text-indigo-500 transition-colors"
                                    >
                                        contact@example.com
                                    </a>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-3">
                                    <MessageSquare
                                        className="text-indigo-500 mx-auto sm:mx-0"
                                        size={24}
                                    />
                                    <span className="text-gray-800 text-base sm:text-lg font-medium">
                                        Kathmandu, Nepal
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.form
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white shadow-xl rounded-2xl p-6 sm:p-8"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none text-sm sm:text-base"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none text-sm sm:text-base"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                                    Your Message
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Type your message..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none resize-none text-sm sm:text-base"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-8 w-full bg-indigo-600 text-white font-semibold py-3 sm:py-4 rounded-lg hover:bg-indigo-700 transition-all shadow-md text-sm sm:text-base"
                            >
                                Send Message ✉
                            </motion.button>
                        </motion.form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Contact;
