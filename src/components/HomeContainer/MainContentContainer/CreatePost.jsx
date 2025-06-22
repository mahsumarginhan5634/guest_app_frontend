import {Avatar} from "@mui/material";
import {Link} from "react-router-dom";
import {getUserFromLocalStorage} from "../../../store/localStorage.js";
import pageRoutes from "../../../route/pageRoutes.jsx";

export default function CreatePost(){
    const user = getUserFromLocalStorage();
    return (
        <>
            <div className="bg-white rounded-lg shadow mb-6 p-4">
                <div className="flex space-x-4">
                    <Link to={pageRoutes.MY_PROFILE.path} className="flex items-center px-2">
                        <Avatar
                            alt={user?.name}
                            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold"
                            style={{fontWeight: "bold", fontSize: "1.5rem", width: 32, height: 32}}
                        >
                            {user?.name.charAt(0).toUpperCase()}
                        </Avatar>
                    </Link>
                    <div className="flex-1">
                        <input
                            type="text"
                            className="w-full rounded-full bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={`Ne düşünüyorsun, ${user?.name.charAt(0).toUpperCase() + user?.name.substring(1)} ?`}
                        />
                    </div>
                </div>
                <div className="border-t mt-4 pt-3">
                    <div className="flex justify-between">
                        <button
                            className="flex items-center text-gray-600 hover:bg-gray-100 rounded-lg px-4 py-2">
                            <svg
                                className="w-6 h-6 mr-2 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>Fotoğraf</span>
                        </button>
                        <button
                            className="flex items-center text-gray-600 hover:bg-gray-100 rounded-lg px-4 py-2">
                            <svg
                                className="w-6 h-6 mr-2 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>Duygu</span>
                        </button>
                        <button
                            className="flex items-center text-gray-600 hover:bg-gray-100 rounded-lg px-4 py-2">
                            <svg
                                className="w-6 h-6 mr-2 text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>Konum</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}