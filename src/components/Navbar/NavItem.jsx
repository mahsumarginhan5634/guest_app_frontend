import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavItem({ to, iconClass, labelKey }) {
    const location = useLocation();
    const { t } = useTranslation();
    const isActive = location.pathname.startsWith(to);

    return (
        <Link to={to} className="flex flex-col items-center gap-1 px-2">
            <i
                className={`${iconClass} text-[1.5rem] ${isActive ? "text-blue-600" : "text-black"}`}
                title={t(labelKey)}
            />
            <span
                className={`w-full h-[2px] rounded-full transition-all duration-300 ${
                    isActive ? "bg-blue-600" : "bg-transparent"
                }`}
            />
        </Link>
    );
}
