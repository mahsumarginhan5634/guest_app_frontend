export default function UpcomingEvents(){
    return (
        <>
            <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Yaklaşan Etkinlikler</h3>
                    <a href="#" className="text-blue-600 text-sm">
                        Tümünü Gör
                    </a>
                </div>

                <div className="space-y-4">
                    <div className="border rounded-lg overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-purple-400 to-pink-500 h-20 flex items-center justify-center text-white font-bold">
                            <div className="text-center">
                                <div className="text-2xl">15</div>
                                <div className="text-xs">HAZİRAN</div>
                            </div>
                        </div>
                        <div className="p-3">
                            <h4 className="font-semibold">Teknoloji Buluşması</h4>
                            <p className="text-xs text-gray-500">İstanbul, 18:00</p>
                            <div className="flex items-center space-x-1 mt-2">
                                <div className="flex -space-x-2">
                                    <div
                                        className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                                        A
                                    </div>
                                    <div
                                        className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                                        B
                                    </div>
                                    <div
                                        className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">
                                        C
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">+12 kişi katılıyor</span>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-blue-400 to-teal-500 h-20 flex items-center justify-center text-white font-bold">
                            <div className="text-center">
                                <div className="text-2xl">22</div>
                                <div className="text-xs">HAZİRAN</div>
                            </div>
                        </div>
                        <div className="p-3">
                            <h4 className="font-semibold">Doğa Yürüyüşü</h4>
                            <p className="text-xs text-gray-500">Belgrad Ormanı, 10:00</p>
                            <div className="flex items-center space-x-1 mt-2">
                                <div className="flex -space-x-2">
                                    <div
                                        className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                                        D
                                    </div>
                                    <div
                                        className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs">
                                        E
                                    </div>
                                    <div
                                        className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs">
                                        F
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">+8 kişi katılıyor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}