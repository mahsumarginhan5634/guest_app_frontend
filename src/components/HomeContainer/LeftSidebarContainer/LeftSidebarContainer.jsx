import {getUserFromLocalStorage} from "../../../store/localStorage.js";
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar} from "@mui/material";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import FollowDialog from "./FollowDialog.jsx";
import {useEffect, useState} from "react";
import {FollowType} from "../../../utils/Enums.js";
import {getUserFollows, getUsersFollowersAndFollowings} from "../../../services/UserFollowService.js";
import {getFollowCount} from "../../../utils/Functions.jsx";
import pageRoutes from "../../../route/pageRoutes.jsx";

export default function LeftSidebarContainer(){
    const user = getUserFromLocalStorage();
    const {t} = useTranslation();
    const [follows , setFollows] = useState([]);
    const [followType , setFollowType] = useState("");
    const [followDialogOpen , setFollowDialogOpen] = useState(false);
    const [followerCount , setFollowerCount] = useState(0);
    const [followingCount , setFollowingCount] = useState(0);

    const getFollowsForUser = async(userId , followType) => {
        try{
            const tempResponse = await getUserFollows(userId,followType);
            if(tempResponse.status){
                const response = await tempResponse.json();
                if(response.meta.code === "200"){
                    setFollows(response.data);
                }
            }
        }catch (error){
            console.error(error)
        }
    }

    const getUserOfFollowersAndFollowings = async (userId) => {
        try{
            const tempResponse = await getUsersFollowersAndFollowings(userId);
            if(tempResponse.status){
                const response = await tempResponse.json();
                if(response.meta.code === "200"){
                    setFollowerCount(response.data.FOLLOWER)
                    setFollowingCount(response.data.FOLLOWING);
                }
            }
        }
        catch (error){
            console.error(error)
        }
    }

    useEffect( () => {
        if(user?.id){
            const fetchFollowersAndFollowings = async () => {
                await getUserOfFollowersAndFollowings(user?.id);
            }
            fetchFollowersAndFollowings();
        }
    }, [user?.id]);

    return (
        <>
            <FollowDialog
                open={followDialogOpen}
                onClose={() => setFollowDialogOpen(false)}
                follows={follows}
                followType={followType}
            />
            <div className="w-full p-4">
                <div className="bg-white rounded-lg shadow p-4 sticky top-20">
                    <div className="flex items-center space-x-3 mb-6 sidebar-item p-2">
                        <Link to={pageRoutes.MY_PROFILE.path} className="flex items-center px-2 gap-x-4">
                            <Avatar
                                alt={user.name}
                                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold"
                                style={{fontWeight: "bold", fontSize: "1.5rem", width: 32, height: 32}}
                            >
                                {user.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>
                                <p className="font-semibold">
                                    {
                                        (user?.name.charAt(0).toUpperCase() + user?.name.substring(1))
                                        + " "
                                        + (user?.surname.charAt(0).toUpperCase() + user?.surname.substring(1))
                                    }
                                </p>
                                <p className="text-sm text-gray-500">
                                    {
                                        user?.username
                                    }
                                </p>
                            </div>
                        </Link>
                    </div>

                    <div className="space-y-2">
                        <a onClick={async () => {
                            setFollowDialogOpen(true)
                            await getFollowsForUser(user?.id, FollowType.FOLLOWER)
                            setFollowType(FollowType.FOLLOWER)
                        }}
                           className="flex items-center justify-between space-x-3 sidebar-item p-2 cursor-pointer"
                        >
                            <div className={"flex gap-x-2"}>
                                <GroupIcon fontSize="small"/>
                                <span className="font-medium">{t("followers")}</span>
                            </div>
                            <div>
                                {getFollowCount(followerCount)}
                            </div>
                        </a>

                        <a onClick={async () => {
                            setFollowDialogOpen(true)
                            await getFollowsForUser(user?.id , FollowType.FOLLOWED)
                            setFollowType(FollowType.FOLLOWED)
                        }}
                           className="flex items-center justify-between space-x-3 sidebar-item p-2 cursor-pointer">
                            {/*// Takip edilen sayısı*/}
                            <div className={"flex gap-x-2"}>
                                <GroupIcon fontSize="small"/>
                                <span className="font-medium">{t("following")}</span>
                            </div>
                            <div>
                                {getFollowCount(followingCount)}
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

                        <a href="" className="flex items-center space-x-3 sidebar-item p-2 cursor-pointer">
                            <MenuIcon/>
                            <span className="font-medium">{t("moreThen")}</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}