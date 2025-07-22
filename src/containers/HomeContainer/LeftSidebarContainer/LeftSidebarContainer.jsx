import {useEffect, useState} from "react";
import {getUserFromLocalStorage} from "../../../store/localStorage.js";
import {getUserFollows, getUsersFollowersAndFollowings} from "../../../services/UserFollowService.js";
import {FollowType} from "../../../utils/Enums.js";
import {getFollowCount, getNameAndSurnameWithFormatted} from "../../../utils/Functions.jsx";
import {Avatar, CircularProgress, Skeleton} from "@mui/material";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import MenuIcon from '@mui/icons-material/Menu';
import FollowDialog from "./FollowDialog.jsx";
import pageRoutes from "../../../route/pageRoutes.jsx";
import CustomAvatar from "../../../components/Avatar/CustomAvatar.jsx";
import {useFollowRefresh} from "../../../context/FollowRefreshProvider.jsx";

export default function LeftSidebarContainer() {
    const [follows, setFollows] = useState([]);
    const [followType, setFollowType] = useState("");
    const [followDialogOpen, setFollowDialogOpen] = useState(false);
    const [followerCount, setFollowerCount] = useState(0);
    const [followingCount, setFollowingCount] = useState(0);
    const [isRequestPending, setIsRequestPending] = useState(false);
    const [isSidebarLoading, setIsSidebarLoading] = useState(true);
    const user = getUserFromLocalStorage();
    const {t} = useTranslation();
    const {isRefreshed} = useFollowRefresh();

    const getFollowsForUser = async (userId, followType) => {
        try {
            const tempResponse = await getUserFollows(userId, followType);
            if (tempResponse.status) {
                const response = await tempResponse.json();
                if (response.meta.code === "200") {
                    setFollows(response.data);
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getUserOfFollowersAndFollowings = async (userId) => {
        try {
            setIsRequestPending(true);
            const tempResponse = await getUsersFollowersAndFollowings(userId);
            if (tempResponse.status) {
                const response = await tempResponse.json();
                if (response.meta.code === "200") {
                    setFollowerCount(response.data.FOLLOWER);
                    setFollowingCount(response.data.FOLLOWING);
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsRequestPending(false);
            setIsSidebarLoading(false);
        }
    };

    useEffect(() => {
        if (user?.id) {
            getUserOfFollowersAndFollowings(user.id);
        } else {
            setIsSidebarLoading(false); // Kullanıcı null gelirse yine de yükleme tamamlanmış kabul edilir
        }
    }, [user?.id]);

    useEffect(() => {
        if(user?.id){
            getUserOfFollowersAndFollowings(user.id)
        }
    }, [isRefreshed]);

    return (
        <>
            <FollowDialog
                open={followDialogOpen}
                onClose={() => setFollowDialogOpen(false)}
                follows={follows}
                followType={followType}
            />
            <div className="w-full p-4 min-w-[300px]">
                <div className="bg-white rounded-lg shadow p-4 sticky">
                    {
                        isSidebarLoading ? (
                            <div className="space-y-4">
                                {/* Skeleton: Avatar + Kullanıcı Bilgisi */}
                                <div className="flex items-center gap-x-4">
                                    <Skeleton variant="circular" width={40} height={40}/>
                                    <div className="flex-1">
                                        <Skeleton width="80%" height={20}/>
                                        <Skeleton width="60%" height={16}/>
                                    </div>
                                </div>

                                {/* Skeleton: Takipçi/Takip edilen/gruplar vb */}
                                <Skeleton  height={60}/>
                                <Skeleton  height={60}/>
                                <Skeleton  height={60}/>
                                <Skeleton  height={60}/>
                                <Skeleton  height={60}/>
                                <Skeleton  height={60}/>
                            </div>
                        ) : (
                            <>
                                {/* ✅ Gerçek içerik buradan başlıyor */}
                                <div className="flex items-center space-x-3 mb-6 sidebar-item p-2">
                                        <Link to={pageRoutes.MY_PROFILE.path} className="flex items-center px-2 gap-x-4">
                                        <CustomAvatar
                                            src={user?.avatarUrl}
                                            alt={user.name}
                                            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold"
                                            sx={{fontWeight: "bold", fontSize: "1.5rem", width: 50, height: 50}}
                                        >
                                        </CustomAvatar>
                                        <div>
                                            <p className="font-semibold">
                                                {
                                                    getNameAndSurnameWithFormatted(user?.name , user?.surname)
                                                }
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {user?.username}
                                            </p>
                                        </div>
                                    </Link>
                                </div>

                                <div className="space-y-2">
                                    <a
                                        className="flex items-center justify-between space-x-3 sidebar-item p-2 cursor-pointer"
                                        onClick={async () => {
                                            setFollowDialogOpen(true);
                                            await getFollowsForUser(user?.id, FollowType.FOLLOWER);
                                            setFollowType(FollowType.FOLLOWER);
                                        }}
                                    >
                                        <div className="flex gap-x-2">
                                            <GroupIcon fontSize="small"/>
                                            <span className="font-medium">{t("followers")}</span>
                                        </div>
                                        <div>
                                            {
                                                isRequestPending
                                                    ? <CircularProgress size={20}/>
                                                    : getFollowCount(followerCount)
                                            }
                                        </div>
                                    </a>

                                    <a
                                        onClick={async () => {
                                            setFollowDialogOpen(true);
                                            await getFollowsForUser(user?.id, FollowType.FOLLOWED);
                                            setFollowType(FollowType.FOLLOWED);
                                        }}
                                        className="flex items-center justify-between space-x-3 sidebar-item p-2 cursor-pointer"
                                    >
                                        <div className="flex gap-x-2">
                                            <GroupIcon fontSize="small"/>
                                            <span className="font-medium">{t("following")}</span>
                                        </div>
                                        <div>
                                            {
                                                isRequestPending
                                                    ? <CircularProgress size={20}/>
                                                    : getFollowCount(followingCount)
                                            }
                                        </div>
                                    </a>

                                    <a href="/groups" className="flex items-center space-x-3 sidebar-item p-2 cursor-pointer">
                                        <PublicIcon/>
                                        <span className="font-medium">{t("groups")}</span>
                                    </a>

                                    <a href="/events" className="flex items-center space-x-3 sidebar-item p-2 cursor-pointer">
                                        <EventIcon/>
                                        <span className="font-medium">{t("events")}</span>
                                    </a>

                                    <a href="/locations" className="flex items-center space-x-3 sidebar-item p-2 cursor-pointer">
                                        <PlaceIcon/>
                                        <span className="font-medium">{t("locations")}</span>
                                    </a>

                                    <a href="#" className="flex items-center space-x-3 sidebar-item p-2 cursor-pointer">
                                        <MenuIcon/>
                                        <span className="font-medium">{t("moreThen")}</span>
                                    </a>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
}
