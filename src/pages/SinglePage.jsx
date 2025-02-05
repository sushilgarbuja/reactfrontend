import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import axios from "axios"


function SinglePage() {
    const { id } = useParams()

    const [blog, setBlog] = useState({})

    const fetchSingleBlog = async () => {
        const response = await axios.get("http://localhost:3000/blog/" + id)
        // console.log(response.data.data)
        setBlog(response.data.data)
    }
    useEffect(() => {
        fetchSingleBlog()
    }, [])
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src={'http://localhost:3000/' + blog?.image} alt="Product Image" />
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit me</button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-200 dark:bg-red-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{blog.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {blog.subtitle}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {blog.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SinglePage
