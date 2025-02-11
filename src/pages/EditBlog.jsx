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
            const response = await axios.get(`http://localhost:3000/blog/${id}`)
            const blog = response.data
            setData({
                title: blog.title,
                subtitle: blog.subtitle,
                description: blog.description,
                image: blog.image,
            })
            setImagePreview(`http://localhost:3000/storage/${blog.image}`)
        }
        fetchBlog()
    }, [id])

    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (name === "image") {
            setData({
                ...data,
                [name]: files[0]
            })
            setImagePreview(URL.createObjectURL(files[0]))
        } else {
            setData({
                ...data,
                [name]: value
            })
        }
    }
    const fetchSingleBlog = async () => {
        const response = await axios.get("http://localhost:3000/blog/" + id)
        // console.log(response.data.data)
        // setData(response.data.data)
        setData({
            title: response.data.data.title,
            subtitle: response.data.data.subtitle,
            description: response.data.data.description,
            image: response.data.data.image
        })
    }
    useEffect(() => {
        fetchSingleBlog()
    }, [])

    const editBlog = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", data.title)
        formData.append("subtitle", data.subtitle)
        formData.append("description", data.description)
        if (data.image instanceof File) {
            formData.append("image", data.image)
        }

        const response = await axios.patch(`http://localhost:3000/blog/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        if (response.status === 200) {
            alert("Blog updated successfully")
            navigate("/")
        }
    }

    return (
        <>
            <Navbar />
            <form onSubmit={editBlog}>
                <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
                    <div className="mt-3 text-center text-4xl font-bold">Edit Blog</div>
                    <div className="p-8">
                        <div className="flex gap-4">
                            <input type="text" name="title" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" value={data.title} onChange={handleChange} placeholder="Title *" />
                            <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" value={data.subtitle} onChange={handleChange} placeholder="Subtitle *" />
                        </div>
                        <div>
                            <input type="file" name="image" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" onChange={handleChange} />
                            {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview mt-4" />}
                        </div>
                        <div className="">
                            <textarea name="description" id="text" cols="30" rows="10" className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300" value={data.description} onChange={handleChange}>Descriptions</textarea>
                        </div>
                        <div className="text-center">
                            <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Update Blog</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default EditBlog