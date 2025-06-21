import PublicIcon from "@mui/icons-material/Public";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function LogoSearchSection() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-wrap md:flex-row items-start md:items-center gap-3 w-full md:w-auto">
                <div className="flex items-center cursor-pointer" onClick={() => navigate("/home")}>
                    <PublicIcon color="primary"/>
                    <span className="ml-2 text-xl font-bold text-blue-600">{t("navbar.socialLink")}</span>
                </div>
                <div className="relative w-full md:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchOutlinedIcon className="text-gray-500"/>
                    </div>
                    <input
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
                        placeholder={t("navbar.search")}
                        type="search"
                    />
                </div>
            </div>

        </>
    );
}
