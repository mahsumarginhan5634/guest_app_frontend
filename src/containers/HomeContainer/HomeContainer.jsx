import MainContent from "./MainContentContainer/MainContent.jsx";
import RightSidebar from "./RightSidebarContainer/RightSidebar.jsx";
import {getUserFromLocalStorage} from "../../store/localStorage.js";
import LeftSidebarContainer from "./LeftSidebarContainer/LeftSidebarContainer.jsx";

export default function HomeContainer(){
    const user = getUserFromLocalStorage();

    return (
        <>
            <div className='flex flex-col justify-center md:flex-row'>
                {
                    user &&
                    (
                        <div className={"flex-1 md:order-1"}>
                            <LeftSidebarContainer/>
                        </div>
                    )
                }
                {
                    user &&
                    (
                        <div className={"w-full flex-1 md:order-3"}>
                            <RightSidebar/>
                        </div>
                    )
                }
                <div className={"w-full flex-2 md:order-2"}>
                    <MainContent/>
                </div>
            </div>
        </>
    )
}