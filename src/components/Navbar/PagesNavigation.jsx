import NavItem from "./NavItem";

export default function PagesNavigation() {
    return (
        <>
            <div className="flex w-full justify-around items-center gap-4">
                <NavItem to="/home" iconClass="pi pi-home" labelKey="navbar.home"/>
                <NavItem to="/explore" iconClass="pi pi-compass" labelKey="navbar.explore"/>
                <NavItem to="/new-post" iconClass="pi pi-plus-circle" labelKey="navbar.newPost"/>
                <NavItem to="/reels" iconClass="pi pi-play" labelKey="navbar.reels"/>
                <NavItem to={"/my-profile"} iconClass={"pi pi-user"} labelKey={"navbar.profile"}/>
            </div>
        </>
    );
}
