import "./style.css"
import StoryContent from "./StoryContent.jsx";
import CreatePost from "./CreatePost.jsx";
import PostContent from "./PostContent.jsx";
import {getUserFromLocalStorage} from "../../../store/localStorage.js";
export default function MainContent(){
    const user = getUserFromLocalStorage();
    return (
        <>
            <div className="w-full p-4">
                {/* hikayeler */}
                {
                    user &&
                    (
                        <StoryContent/>
                    )
                }
                {/* <!-- Gönderi Oluştur -->  */}
                {
                    user &&
                    (
                        <CreatePost/>
                    )
                }
                {/* <!-- Gönderiler --> */}
                <div className="space-y-6">
                    {/* Gönderi 1 */}
                    <PostContent/>
                    {/* Gönderi 2 Verileri dinamik yaptıktan sonra burayı sil*/}
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/32.jpg"
                                        alt="Profil resmi"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <p className="font-semibold">Ahmet Yılmaz</p>
                                        <p className="text-xs text-gray-500">5 saat önce</p>
                                    </div>
                                </div>
                                <button className="text-gray-500 hover:text-gray-700">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-3">
                                <p>Yeni projeme başladım! React ve Tailwind ile harika şeyler yapacağım
                                    🚀</p>
                            </div>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1528747008803-1c9d9e07b917?auto=format&fit=crop&w=800&q=80"
                            alt="Proje görseli"
                            className="w-full h-64 object-cover rounded-b-lg"
                        />
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                                        </svg>
                                        <span>98</span>
                                    </button>
                                    <button
                                        className="flex items-center space-x-1 text-gray-500 hover:text-red-600">
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <span>21</span>
                                    </button>
                                </div>
                                <div className="text-gray-500 text-sm">
                                    <span>30 yorum</span>
                                </div>
                            </div>
                            <div className="border-t border-b py-2">
                                <div className="flex justify-around">
                                    <button
                                        className="flex items-center space-x-2 post-interaction py-1 px-2">
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                                        </svg>
                                        <span>Beğen</span>
                                    </button>
                                    <button
                                        className="flex items-center space-x-2 post-interaction py-1 px-2">
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <span>Yorum Yap</span>
                                    </button>
                                    <button
                                        className="flex items-center space-x-2 post-interaction py-1 px-2">
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15 8a3 3 0 00-2.995 2.824L12 11v1H7v2h5v1a3 3 0 002.824 2.995L15 18a3 3 0 002.995-2.824L18 15v-1h1v-2h-1v-1a3 3 0 00-2.824-2.995L15 8z"></path>
                                        </svg>
                                        <span>Paylaş</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}