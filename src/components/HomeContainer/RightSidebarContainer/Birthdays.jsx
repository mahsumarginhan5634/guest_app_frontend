export default function Birthdays(){
    return (
        <>
            <div className="bg-white rounded-lg shadow p-4 mb-6">
                <h3 className="font-bold text-lg mb-4">Doğum Günleri</h3>
                <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                        <svg
                            className="w-6 h-6 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                                clipRule="evenodd"
                            ></path>
                            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                        </svg>
                    </div>
                    <p className="text-sm">
                        Bugün <span className="font-semibold">Ayşe Demir</span>'in doğum günü.
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                        <svg
                            className="w-6 h-6 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                                clipRule="evenodd"
                            ></path>
                            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                        </svg>
                    </div>
                    <p className="text-sm">
                        Yarın <span className="font-semibold">Burak Şahin</span>'in doğum günü.
                    </p>
                </div>
            </div>
        </>
    );
}