import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';

function ToastCleaner() {

    const location = useLocation();

    useEffect(() => {

        toast.dismiss();

    }, [location.pathname]);

    return null;
}

export default ToastCleaner
