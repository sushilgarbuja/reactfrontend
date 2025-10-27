import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function About() {
    return (
        <>
            <Navbar />

            {/* ✅ Full-screen Hero Section */}
            <section
                className="relative min-h-[90vh] sm:h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-white px-4 sm:px-6 md:px-10"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        About Us
                    </h1>
                    <p className="text-base sm:text-lg md:text-2xl max-w-2xl md:max-w-3xl mx-auto leading-relaxed text-gray-200">
                        Empowering developers through technology, innovation, and creativity.
                        Let’s build the future of web development together.
                    </p>
                </motion.div>
            </section>

            {/* ✅ About Content Section */}
            <section id="learn-more" className="bg-gray-50 py-16 sm:py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">

                        {/* Left Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="max-w-xl mx-auto md:mx-0 text-center md:text-left"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight ">
                                Who We Are
                            </h2>
                            <p className="mt-5 text-gray-700 text-base sm:text-lg leading-relaxed">
                                Welcome to <strong>Sushil Blog</strong> — your ultimate tech learning hub!
                                We share insights on modern technologies, web development, and AI
                                innovations to help developers of all levels grow.
                            </p>
                            <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                                Our mission is to make tech education accessible and inspiring.
                                Through tutorials, projects, and coding resources, we aim to
                                empower the next generation of digital creators.
                            </p>
                            <div className="mt-8">
                                <a
                                    href="#"
                                    className="inline-block bg-blue-600 text-white text-sm sm:text-base px-6 py-3  shadow-md hover:bg-blue-700 transition-all duration-300"
                                >
                                    Discover More →
                                </a>
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                                alt="About Technology"
                                className="rounded-2xl shadow-lg object-cover w-full max-w-md sm:max-w-lg md:max-w-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default About;
