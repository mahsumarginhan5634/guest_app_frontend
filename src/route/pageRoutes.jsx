import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import ProtectBackward from "./ProtectedRoutes/ProtectBackward";
import ProtectForward from "./ProtectedRoutes/ProtectForward";
import { Navigate } from "react-router-dom";
import MyProfile from "../pages/Profile/MyProfile";
import Explore from "../pages/Explore/Explore.jsx";
import NewPost from "../pages/NewPost/NewPost.jsx";
import Reels from "../pages/Reels/Reels.jsx";
import { paths } from "./paths";

const pageRoutes = {
    DEFAULT: {
        path: paths.DEFAULT,
        element: <Navigate to={paths.HOME} />,
    },
    HOME: {
        path: paths.HOME,
        element: <Home/>,
    },
    EXPLORE: {
        path: paths.EXPLORE,
        element: (
            <ProtectForward>
                <Explore />
            </ProtectForward>
        ),
    },
    NEW_POST: {
        path: paths.NEW_POST,
        element: (
            <ProtectForward>
                <NewPost />
            </ProtectForward>
        ),
    },
    REELS: {
        path: paths.REELS,
        element: (
            <ProtectForward>
                <Reels />
            </ProtectForward>
        ),
    },
    AUTH_LOGIN: {
        path: paths.AUTH_LOGIN,
        element: (
            <ProtectBackward>
                <Login />
            </ProtectBackward>
        ),
    },
    AUTH_REGISTER: {
        path: paths.AUTH_REGISTER,
        element: (
            <ProtectBackward>
                <Register />
            </ProtectBackward>
        ),
    },
    MY_PROFILE: {
        path: paths.MY_PROFILE,
        element: (
            <ProtectForward>
                <MyProfile />
            </ProtectForward>
        ),
    },
    NOT_FOUND: {
        path: paths.NOT_FOUND,
        element: <NotFound />,
    },
};

export default pageRoutes;
