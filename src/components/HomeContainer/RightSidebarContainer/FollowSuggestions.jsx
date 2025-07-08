import {useEffect, useState} from "react";
import {getMyFriendSuggestions} from "../../../services/UserFollowService.js";
import {getUserFromLocalStorage} from "../../../store/localStorage.js";
import {Avatar, Skeleton} from "@mui/material";
import {useTranslation} from "react-i18next";
import FollowDialog from "../LeftSidebarContainer/FollowDialog.jsx";

export default function FollowSuggestions(){
    const user = getUserFromLocalStorage();
    const [mySuggestionsFollows , setMySuggestionsFollows] = useState([]);
    const [selectedMutualFriends, setSelectedMutualFriends] = useState([]);
    const [isRequestPending , setIsRequestPending] = useState(false);
    const [followDialogOpen , setFollowDialogOpen] = useState(false);
    const {t}  = useTranslation();


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
    }, []);

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

                                        <div className="space-y-4">
                                            {

                                                mySuggestionsFollows.map((suggestedFriend, index) => (

                                                    <div key={index}
                                                         className="flex items-center justify-between border-b-[1px_solid_black]">
                                                        <FollowDialog
                                                            open={followDialogOpen}
                                                            onClose={() => setFollowDialogOpen(false)}
                                                            follows={selectedMutualFriends}
                                                            followType={t("mutualFriends")}
                                                        />
                                                        <div className="flex items-center space-x-3">
                                                            <div className="story-circle"
                                                                 style={{width: 40, height: 40}}>
                                                                <div className="story-circle-inner">
                                                                    <Avatar
                                                                        title={suggestedFriend.name + " " + suggestedFriend.surname}
                                                                        alt={suggestedFriend.name}
                                                                        className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold"
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "1.5rem",
                                                                            width: 32,
                                                                            height: 32
                                                                        }}
                                                                    >
                                                                        {suggestedFriend.name.charAt(0).toUpperCase()}
                                                                    </Avatar>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold text-sm">
                                                                    {
                                                                        suggestedFriend.name.charAt(0).toUpperCase() + suggestedFriend.name.substring(1) +
                                                                        " " +
                                                                        suggestedFriend.surname.charAt(0).toUpperCase() + suggestedFriend.surname.substring(1)
                                                                    }
                                                                </p>
                                                                <p
                                                                    className="text-xs text-gray-500 cursor-pointer hover:underline"
                                                                    onClick={() => {
                                                                        setFollowDialogOpen(true)
                                                                        setSelectedMutualFriends(suggestedFriend.mutualFriends)
                                                                    }}
                                                                    title={t("seeMutualFriends")}
                                                                >
                                                                    {
                                                                        suggestedFriend.mutualFriends.length + " " + t("mutualFriend")
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <button
                                                            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-200">
                                                            {
                                                                t("follow").toUpperCase()
                                                            }
                                                        </button>
                                                    </div>
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