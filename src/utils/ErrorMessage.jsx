// ErrorMessage.js
import { toast } from "react-toastify";
import { ToastMessage } from "./Enums";

export const showToastMessage = (translatedMessage, messageType, durationTime = 3000) => {
    switch (messageType) {
        case ToastMessage.SUCCESS:
            return toast.success(
                <div title={translatedMessage}>
                    {translatedMessage}
                </div>,
                {
                    position: "top-right",
                    autoClose: { durationTime },
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    theme: "light",
                    style: {
                        width: "25vw",
                        height: "10vh",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                });

        case ToastMessage.ERROR:
            return toast.error(
                <div title={translatedMessage}>
                    {translatedMessage}
                </div>,
                {
                    position: "top-right",
                    autoClose: { durationTime },
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    theme: "light",
                    style: {
                        width: "25vw",
                        height: "10vh",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                });

        case ToastMessage.WARNING:
            return toast.warning(
                <div title={translatedMessage}>
                    {translatedMessage}
                </div>,
                {
                    position: "top-right",
                    autoClose: { durationTime },
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    theme: "light",
                    style: {
                        width: "25vw",
                        height: "10vh",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                });

        default:
            return;
    }
};
