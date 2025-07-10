import {Avatar} from "@mui/material";
import React from "react";
import {getUserFromLocalStorage} from "../../store/localStorage.js";


export default function CustomAvatar({className = "" , title = "", onClick , src , sx = {} , alt = ""}){

    const user = getUserFromLocalStorage();

    const defaultAvatar =
        user?.gender?.toUpperCase() === "WOMAN"
            ? "https://res.cloudinary.com/dkiqzk89z/image/upload/v1752148659/default-female-avatar_urovmo.png"
            : "https://res.cloudinary.com/dkiqzk89z/image/upload/v1752148684/default-male-avatar_hiiek0.png";

    const isValidUrl = (url) => {
        try{
            new URL(url);
            return true;
        }
        catch (_){
            return false;
        }
    }

    return (
        <>
            <Avatar
                src={ src && isValidUrl(src) ? src : defaultAvatar }
                className={className}
                title={title}
                onClick={onClick}
                sx={sx}
            />
        </>
    )
}