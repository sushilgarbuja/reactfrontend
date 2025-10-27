import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

function EditBlog() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState({
        title: "",
        subtitle: "",
        description: "",
        image: "",
    })
    const [imagePreview, setImagePreview] = useState(null)

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/blog/${id}`)
                const blog = response.data.data || response.data
                setData({
                    title: blog.title,
                    subtitle: blog.subtitle,
                    description: blog.description,
                    image: blog.image,
                })
                if (blog.image) setImagePreview(blog.image.startsWith("http") ? blog.image : `http://localhost:3000/storage/${blog.image}`)
            } catch (err) {
                console.error("Error fetching blog:", err)
            }
        }
        fetchBlog()
    }, [id])

    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (name === "image") {
            setData({ ...data, image: files[0] })
            setImagePreview(URL.createObjectURL(files[0]))
        } else {
            setData({ ...data, [name]: value })
        }
    }

    const editBlog = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", data.title)
        formData.append("subtitle", data.subtitle)
        formData.append("description", data.description)
        if (data.image instanceof File) {
            formData.append("image", data.image)
        }

        try {
            const response = await axios.patch(`http://localhost:3000/blog/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            if (response.status === 200) {
                alert("Blog updated successfully!")
                navigate("/")
            }
        } catch (error) {
            alert("Something went wrong while updating.")
            console.error("Error updating blog:", error)
        }
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 dark:bg-[#0b1120] py-10 px-4 sm:px-6 lg:px-8 flex justify-center">
                <form
                    onSubmit={editBlog}
                    className="w-full max-w-3xl bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 sm:p-10 border border-gray-200 dark:border-gray-700"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-center">
                        Edit Blog
                    </h2>

                    {/* Title & Subtitle */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <input
                            type="text"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                            placeholder="Title *"
                            className="w-full sm:w-1/2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <input
                            type="text"
                            name="subtitle"
                            value={data.subtitle}
                            onChange={handleChange}
                            placeholder="Subtitle *"
                            className="w-full sm:w-1/2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="mb-6">
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            className="block w-full text-sm text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800 focus:outline-none"
                        />
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="mt-4 w-full h-60 object-cover rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
                            />
                        )}
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                            rows="6"
                            placeholder="Write your blog description here..."
                            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold py-3 px-10 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                        >
                            Update Blog
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditBlog
