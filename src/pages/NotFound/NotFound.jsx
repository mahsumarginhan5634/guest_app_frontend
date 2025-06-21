import React from 'react';
import './NotFound.css';
import { useTranslation } from 'react-i18next';

function NotFound() {
    const { t } = useTranslation();
    return (
        <div className="notfound-container flex items-center justify-center">
            <p className="notfound-text">
                <i>
                    <b>
                        {
                            t("pageNotFound")
                        }
                    </b>
                </i>
            </p>
        </div>
    );
}

export default NotFound;
