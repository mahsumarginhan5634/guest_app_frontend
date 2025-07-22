export default function StoryContent(){
    return (
        <>
            <div className="bg-white rounded-lg shadow mb-6 p-4">
                <div className="flex space-x-4 overflow-x-auto pb-2">
                    {/* Hikaye Ekle */}
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div className="story-circle mb-1">
                            <div className="story-circle-inner">
                                <div
                                    className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <span className="text-xs font-medium">Hikaye Ekle</span>
                    </div>

                    {/* Ahmet */}
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div className="story-circle mb-1">
                            <div className="story-circle-inner">
                                <svg className="w-full h-full text-blue-500" viewBox="0 0 20 20"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="#4F46E5"/>
                                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                                          fill="white" fontSize="8" fontWeight="bold">AY
                                    </text>
                                </svg>
                            </div>
                        </div>
                        <span className="text-xs font-medium">Ahmet</span>
                    </div>

                    {/* Zeynep */}
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div className="story-circle mb-1">
                            <div className="story-circle-inner">
                                <svg className="w-full h-full text-blue-500" viewBox="0 0 20 20"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="#EC4899"/>
                                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                                          fill="white" fontSize="8" fontWeight="bold">ZK
                                    </text>
                                </svg>
                            </div>
                        </div>
                        <span className="text-xs font-medium">Zeynep</span>
                    </div>

                    {/* Mehmet */}
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div className="story-circle mb-1">
                            <div className="story-circle-inner">
                                <svg className="w-full h-full text-blue-500" viewBox="0 0 20 20"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="#10B981"/>
                                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                                          fill="white" fontSize="8" fontWeight="bold">MY
                                    </text>
                                </svg>
                            </div>
                        </div>
                        <span className="text-xs font-medium">Mehmet</span>
                    </div>

                    {/* Elif */}
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div className="story-circle mb-1">
                            <div className="story-circle-inner">
                                <svg className="w-full h-full text-blue-500" viewBox="0 0 20 20"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="#F59E0B"/>
                                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                                          fill="white" fontSize="8" fontWeight="bold">EA
                                    </text>
                                </svg>
                            </div>
                        </div>
                        <span className="text-xs font-medium">Elif</span>
                    </div>

                    {/* Can */}
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div className="story-circle mb-1">
                            <div className="story-circle-inner">
                                <svg className="w-full h-full text-blue-500" viewBox="0 0 20 20"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="#6366F1"/>
                                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                                          fill="white" fontSize="8" fontWeight="bold">CK
                                    </text>
                                </svg>
                            </div>
                        </div>
                        <span className="text-xs font-medium">Can</span>
                    </div>
                </div>
            </div>
        </>
    )
}