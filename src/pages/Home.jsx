import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

function Home() {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get('https://mern3-node-ypez.onrender.com/blog');
        console.log(response.data.data);
        setBlogs(response.data.data);
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    console.log(blogs);
    return (
        <>
            <Navbar />
            <HeroSection />
            <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {
                        blogs.map(function (blog) {
                            return (
                                <Card blog={blog} key={blog.id} className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700' />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;
