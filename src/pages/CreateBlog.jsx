import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function CreateBlog() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: "",
        subtitle: "",
        description: "",
        image: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setData({
            ...data,
            [name]: name === "image" ? files[0] : value,
        });
    };

    const createBlog = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(data).forEach((key) => formData.append(key, data[key]));

        try {
            const response = await axios.post("https://mern3-node-ypez.onrender.com/blog", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            if (response.status === 200) {
                alert("✅ Blog created successfully!");
                navigate("/");
            }
        } catch (error) {
            console.error("Error creating blog:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <Navbar transparent />
            <section
                className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-10 pt-20 pb-5"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

                {/* Form Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 text-white"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-center"
                    >
                        Create a Blog
                    </motion.h1>

                    <form onSubmit={createBlog} className="space-y-6">
                        {/* Title and Subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col md:flex-row gap-4"
                        >
                            <input
                                type="text"
                                name="title"
                                placeholder="Blog Title *"
                                onChange={handleChange}
                                required
                                className="w-full bg-white/20 text-white placeholder-gray-200  px-4 py-3 border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                            />
                            <input
                                type="text"
                                name="subtitle"
                                placeholder="Subtitle *"
                                onChange={handleChange}
                                required
                                className="w-full bg-white/20 text-white placeholder-gray-200  px-4 py-3 border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                            />
                        </motion.div>

                        {/* Image Input */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <label className="block text-gray-200 mb-2 text-sm sm:text-base font-medium">
                                Upload Image
                            </label>
                            <input
                                type="file"
                                name="image"
                                onChange={handleChange}
                                className="w-full bg-white/20 text-gray-100 file:cursor-pointer file:bg-blue-600 file:hover:bg-blue-700 file:border-0 file:px-4 file:py-2 file:rounded-md file:text-white  px-4 py-3 border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                            />
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <label className="block text-gray-200 mb-2 text-sm sm:text-base font-medium">
                                Blog Content
                            </label>
                            <textarea
                                name="description"
                                rows="6"
                                placeholder="Write your blog content here..."
                                onChange={handleChange}
                                className="w-full bg-white/20 text-white placeholder-gray-200  px-4 py-3 border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none resize-none transition-all"
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-center"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4  shadow-lg hover:shadow-blue-500/40 transition-all duration-300 w-full sm:w-auto"
                            >
                                Publish Blog
                            </motion.button>
                        </motion.div>
                    </form>
                </motion.div>
            </section>

            <Footer />
        </>
    );
}

export default CreateBlog;
