import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
    return (
        <>
            <Navbar />
            <section className="bg-gray-100">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                            <p className="mt-4 text-gray-600 text-lg">Welcome to Sushil Blog, a platform where I share insights, knowledge, and updates on technology, web development, programming, and more. Whether you're a beginner or an experienced developer, you'll find valuable content to enhance your skills.

                                I aim to simplify complex topics and provide practical tips to help you grow in the tech field. Stay tuned for tutorials, project ideas, and the latest industry trends.

                                Thank you for visiting Sushil Blog—let’s learn and grow together! 🚀</p>
                            <div className="mt-8">
                                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                                    <span className="ml-2">&#8594;</span></a>
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default About;