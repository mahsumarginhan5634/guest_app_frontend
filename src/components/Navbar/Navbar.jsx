import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import LogoSearchSection from "./LogoSearchSection.jsx";
import PagesNavigation from "./PagesNavigation.jsx";
import NotificationActions from "./NotificationActions.jsx";

function Navbar({ forwardRef }) {
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {}, [currentPath]);

    return (
        <>
            <nav ref={forwardRef} className="bg-white shadow-md fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between gap-7 py-5">
                        <div>
                            <LogoSearchSection/>
                        </div>
                        <div className="flex-1 hidden lg:flex">
                            <PagesNavigation/>
                        </div>
                        <div className="">
                            <NotificationActions/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
