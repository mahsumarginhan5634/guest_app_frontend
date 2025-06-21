export default function FriendSuggestions(){
    return (
        <>
            <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Arkadaş Önerileri</h3>
                    <a href="#" className="text-blue-600 text-sm">
                        Tümünü Gör
                    </a>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="story-circle" style={{width: 40, height: 40}}>
                                <div className="story-circle-inner">
                                    <svg
                                        className="w-full h-full text-blue-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="10" cy="10" r="10" fill="#3B82F6"></circle>
                                        <text
                                            x="50%"
                                            y="50%"
                                            dominantBaseline="middle"
                                            textAnchor="middle"
                                            fill="white"
                                            fontSize="8"
                                            fontWeight="bold"
                                        >
                                            OY
                                        </text>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Ozan Yılmaz</p>
                                <p className="text-xs text-gray-500">5 ortak arkadaş</p>
                            </div>
                        </div>
                        <button
                            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-200">
                            Ekle
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="story-circle" style={{width: 40, height: 40}}>
                                <div className="story-circle-inner">
                                    <svg
                                        className="w-full h-full text-blue-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="10" cy="10" r="10" fill="#8B5CF6"></circle>
                                        <text
                                            x="50%"
                                            y="50%"
                                            dominantBaseline="middle"
                                            textAnchor="middle"
                                            fill="white"
                                            fontSize={8}
                                            fontWeight="bold"
                                        >
                                            SD
                                        </text>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Selin Demir</p>
                                <p className="text-xs text-gray-500">2 ortak arkadaş</p>
                            </div>
                        </div>
                        <button
                            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-200">
                            Ekle
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="story-circle" style={{width: 40, height: 40}}>
                                <div className="story-circle-inner">
                                    <svg
                                        className="w-full h-full text-blue-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="10" cy="10" r="10" fill="#EC4899"></circle>
                                        <text
                                            x="50%"
                                            y="50%"
                                            dominantBaseline="middle"
                                            textAnchor="middle"
                                            fill="white"
                                            fontSize={8}
                                            fontWeight="bold"
                                        >
                                            KA
                                        </text>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Kerem Aydın</p>
                                <p className="text-xs text-gray-500">8 ortak arkadaş</p>
                            </div>
                        </div>
                        <button
                            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-200">
                            Ekle
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}