import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function SinglePage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [blog, setBlog] = useState({})

    const fetchSingleBlog = async () => {
        try {
            const response = await axios.get(`https://mern3-node-ypez.onrender.com/blog/${id}`)
            setBlog(response.data.data)
        } catch (error) {
            console.error("Error fetching blog:", error)
        }
    }

    useEffect(() => {
        fetchSingleBlog()
        window.scrollTo(0, 0)
    }, [id])

    const deleteBlog = async () => {
        try {
            const response = await axios.delete(`https://mern3-node-ypez.onrender.com/blog/${id}`)
            if (response.status === 200) {
                alert("Blog deleted successfully")
                navigate("/")
            }
        } catch (error) {
            alert("Something went wrong while deleting.")
            console.error("Error deleting blog:", error)
        }
    }

    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 dark:bg-[#0b1120] min-h-screen py-16"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    {/* Blog Header */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
                            {blog.title}
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg italic">
                            {blog.subtitle}
                        </p>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="overflow-hidden rounded-2xl shadow-lg mb-10"
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Blog Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="prose dark:prose-invert max-w-none leading-relaxed text-gray-800 dark:text-gray-200 text-lg"
                    >
                        <p className="whitespace-pre-line">{blog.description}</p>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 mt-12"
                    >
                        <Link to={`/edit/${blog._id}`} className="flex-1">
                            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3  font-semibold hover:shadow-lg hover:scale-105 transition">
                                Edit Blog
                            </button>
                        </Link>
                        <button
                            onClick={deleteBlog}
                            className="flex-1 bg-gradient-to-r from-red-600 to-red-400 text-white py-3  font-semibold hover:shadow-lg hover:scale-105 transition"
                        >
                            Delete Blog
                        </button>
                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </>
    )
}

export default SinglePage
