import React from 'react'
import { clearLocalStorage } from '../../store/localStorage'
import { useNavigate } from 'react-router-dom';
import {Button} from "@mui/material";
import pageRoutes from "../../route/pageRoutes.jsx";
import AvatarUpdater from "../../components/Avatar/AvatarUpdater.jsx";

function MyProfile() {
    const navigate = useNavigate();
    const logout = () => {
        clearLocalStorage();
        navigate(pageRoutes.HOME.path);
    }
    return (
        <div>
            <Button content={"outlined"} onClick={logout} className={"border-2 p-2 rounded-md"}>
                Çıkış yap
            </Button>

            <AvatarUpdater/>
        </div>
    )
}

export default MyProfile
