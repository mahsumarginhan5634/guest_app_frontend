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


const routes = [
    {
        path: "/",
        element: <div>
            <Navigate to={"/home"} />
        </div>,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/explore",
        element:
        <ProtectForward>
            <Explore />
        </ProtectForward>,
    },
    {
        path: "/new-post",
        element:
            <ProtectForward>
                <NewPost />
            </ProtectForward>,
    },
    {
        path: "/reels",
        element:
            <ProtectForward>
                <Reels />
            </ProtectForward>,
    },
    {
        path: "/auth/login",
        element:
            <ProtectBackward>
                <Login />
            </ProtectBackward>,
    },
    {
        path: "/auth/register",
        element:
            <ProtectBackward>
                <Register />
            </ProtectBackward>,
    },
    {
        path: "/my-profile",
        element: (
            <ProtectForward>
                <MyProfile />
            </ProtectForward>
        )
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

export default routes;



/*
Nested (iç içe route örneği.)
{
    path: "/",
    element: <Home />,
    children:[
        {
            path:"settings",
            element:<Settings/>,
        },
        {
            path:"profile",
            element:<Profile/>
        }
    ]
}
    */