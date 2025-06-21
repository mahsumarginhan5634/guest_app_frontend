import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setLastVisitedPath } from "../store/localStorage";

function RouterTracker() {
    const location = useLocation();

    useEffect(() => {
        const isAuthPage = location.pathname.startsWith("/auth");
        if (!isAuthPage) {
            setLastVisitedPath(location.pathname);
        }
    }, [location])

    return null;
}
export default RouterTracker;