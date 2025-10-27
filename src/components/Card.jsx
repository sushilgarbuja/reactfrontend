import { Link } from "react-router-dom";

function truncateText(text, length) {
    if (text.length > length) {
        return text.substring(0, length) + '...';
    }
    return text;
}

function Card(props) {
    return (
        <div className="max-w-sm mx-auto my-4 transition-transform transform hover:scale-105">
            <Link to={`/blog/${props.blog._id}`} className="block bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                <img className="w-full h-48 object-cover" src={props.blog.image} alt={props.blog.title} />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {truncateText(props.blog.title, 50)} {/* Adjust the length as needed */}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {truncateText(props.blog.description, 100)} {/* Adjust the length as needed */}
                    </p>
                    <Link to={`/blog/${props.blog._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </Link>
        </div>
    );
}

export default Card;
