import {useEffect, useState} from "react";
import {getMyFriendSuggestions} from "../../../services/UserFollowService.js";
import {getUserFromLocalStorage} from "../../../store/localStorage.js";
import {Avatar, Skeleton} from "@mui/material";
import {useTranslation} from "react-i18next";
import FollowDialog from "../LeftSidebarContainer/FollowDialog.jsx";
import CustomAvatar from "../../../components/Avatar/CustomAvatar.jsx";
import {getNameAndSurnameWithFormatted} from "../../../utils/Functions.jsx";
import SuggestedFollow from "./SuggestedFollow.jsx";
import {useFollowRefresh} from "../../../context/FollowRefreshProvider.jsx";

export default function FollowSuggestions(){
    const user = getUserFromLocalStorage();
    const [mySuggestionsFollows , setMySuggestionsFollows] = useState([]);
    const [isRequestPending , setIsRequestPending] = useState(false);
    const {t}  = useTranslation();

    const {isRefreshed} = useFollowRefresh();

    const getMyFollowsSuggestions  = async (userId) => {
        try{
            setIsRequestPending(true)
            const tempResponse = await getMyFriendSuggestions(userId);
            if (tempResponse.status){
                const response = await tempResponse.json();
                if(response.meta.code === "200"){
                    const data = response.data;
                    setMySuggestionsFollows(data);
                }
            }
        }
        catch (error){
            console.log(error)
        }
        finally {
            setIsRequestPending(false);
        }

    }

    useEffect(() => {
        getMyFollowsSuggestions(user.id)
    }, [isRefreshed]);


    return (
        <>
            {
                isRequestPending ?
                (
                    (
                        <div className="bg-white rounded-lg shadow p-4 mb-6 max-h-[400px] overflow-y-auto">
                                <div className="flex items-center gap-1 justify-between mb-4">
                                    <Skeleton width={"70%"} height={50}/>
                                    <Skeleton width={"30%"} height={50}/>
                                </div>

                                <div className="flex items-start gap-x-2">
                                    <Skeleton variant="circular" width={40} height={40}/>
                                    <div className={"flex-1"}>
                                        <p>
                                            <Skeleton height={40}/>
                                        </p>
                                        <p>
                                            <Skeleton height={20}/>
                                        </p>
                                    </div>
                                    <div className={"flex-1"}>
                                        <Skeleton height={40} />
                                    </div>
                                </div>
                        </div>
                    )
                )
                :
                (
                    mySuggestionsFollows.length > 0 ?
                    (
                        <div>
                            <div className="bg-white rounded-lg shadow p-4 mb-6 max-h-[400px] overflow-y-auto">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-bold text-lg">
                                            {t("followSuggestions").toUpperCase()}
                                        </h3>
                                        <a href="#" className="text-blue-600 text-sm">
                                            {
                                                t("seeMore")
                                            }
                                        </a>
                                    </div>

                                    <div className="space-y-4 overflow-y-auto">
                                        {
                                            mySuggestionsFollows.map((suggestedFriend) => (
                                                <SuggestedFollow
                                                    suggestedFriend={suggestedFriend}
                                                />
                                            ))
                                }
                            </div>
                        </div>
                        </div>
                    )
                    :
                    (
                        <p></p>
                    )
                )

            }
        </>
    );
}