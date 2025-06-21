import React from 'react'
import { Navigate } from 'react-router-dom';
import { getAccessToken, getLastVisitedPath } from '../../store/localStorage';

function ProtectBackward({ children }) {

    const token = getAccessToken();

    if (token) {
        const lastVisitedPath = getLastVisitedPath() || "/";

        return (
            <Navigate
                to={lastVisitedPath}
                replace
            />
        )
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectBackward

