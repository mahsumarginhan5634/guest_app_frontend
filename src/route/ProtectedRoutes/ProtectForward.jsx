import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { getAccessToken } from '../../store/localStorage';

function ProtectForward({ children }) {
    const token = getAccessToken();
    const location = useLocation();

    if (!token) {
        return (
            <Navigate
                to="/auth/login"
                state={{ from: location }}
                replace
            />
        )
    }

    return <>{children}</>;
}

export default ProtectForward;
