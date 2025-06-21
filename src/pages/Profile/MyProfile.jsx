import React from 'react'
import { clearLocalStorage } from '../../store/localStorage'
import { useNavigate } from 'react-router-dom';
import {Button} from "@mui/material";

function MyProfile() {
    const navigate = useNavigate();
    const logout = () => {
        clearLocalStorage();
        navigate("/home")
    }
    return (
        <div>
            <Button content={"outlined"} onClick={logout} className={"border-2 p-2 rounded-md"}>
                Çıkış yap
            </Button>
        </div>
    )
}

export default MyProfile
