import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { getAccessToken } from '../../store/localStorage';
import pageRoutes from "../pageRoutes.jsx";

function ProtectForward({ children }) {
    const token = getAccessToken();
    const location = useLocation();

    if (!token) {
        return (
            <Navigate
                to={pageRoutes.AUTH_LOGIN.path}
                state={{ from: location }}
                replace
            />
        )
    }

    return <>{children}</>;
}

export default ProtectForward;
