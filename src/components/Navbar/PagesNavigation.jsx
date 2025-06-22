import NavItem from "./NavItem";
import pageRoutes from "../../route/pageRoutes.jsx";

export default function PagesNavigation() {
    return (
        <>
            <div className="flex w-full justify-around items-center gap-4">
                <NavItem to={pageRoutes.HOME.path} iconClass="pi pi-home" labelKey="navbar.home"/>
                <NavItem to={pageRoutes.EXPLORE.path} iconClass="pi pi-compass" labelKey="navbar.explore"/>
                <NavItem to={pageRoutes.NEW_POST.path} iconClass="pi pi-plus-circle" labelKey="navbar.newPost"/>
                <NavItem to={pageRoutes.REELS.path} iconClass="pi pi-play" labelKey="navbar.reels"/>
                <NavItem to={pageRoutes.MY_PROFILE.path} iconClass={"pi pi-user"} labelKey={"navbar.profile"}/>
            </div>
        </>
    );
}
