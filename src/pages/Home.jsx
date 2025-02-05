import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";
function Home() {
    //second ma yo code lekhne
    //ani cors error aauxa teslai fixed garna lai cors package install gareko xa backend ma
    const [blogs, setBlogs] = useState([]) //suru ma khali array pass gareko
    const fetchBlogs = async () => {
        const response = await axios.get('http://localhost:3000/blog')
        console.log(response.data.data) //yo code le console ma data haru dekhauxa aba frontend ma display garne useState ko kam ho
        setBlogs(response.data.data) //setBlogs le blogs ma data save garxa
    }

    //first ma talako code lekhne
    //axios ko use garna lai npm i axios garne
    useEffect(() => {
        fetchBlogs()
    }, [])

    console.log(blogs)
    return (
        <>
            <Navbar />
            <div className="flex flex-wrap">
                {
                    blogs.map(function (blog) {
                        return (
                            <Card blog={blog} key={blog.id} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default Home;