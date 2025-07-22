import FollowDialog from "../LeftSidebarContainer/FollowDialog.jsx";
import CustomAvatar from "../../../components/Avatar/CustomAvatar.jsx";
import {getNameAndSurnameWithFormatted} from "../../../utils/Functions.jsx";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {followUser} from "../../../services/UserFollowService.js";
import {getUserFromLocalStorage} from "../../../store/localStorage.js";
import {showToastMessage} from "../../../utils/ErrorMessage.jsx";
import {ToastMessage} from "../../../utils/Enums.js";
import FollowSuggestions from "./FollowSuggestions.jsx";
import {useFollowRefresh} from "../../../context/FollowRefreshProvider.jsx";

export default function SuggestedFollow({suggestedFriend}){
    const user = getUserFromLocalStorage();
    const {t}  = useTranslation();
    const [selectedMutualFriends, setSelectedMutualFriends] = useState([]);
    const [followDialogOpen , setFollowDialogOpen] = useState(false);

    const {triggerRefresh} = useFollowRefresh();


    const handleFollowUser = async (usernameOfToBeFollowed) => {
        console.log(usernameOfToBeFollowed)

        const tempResponse = await followUser(user?.id,suggestedFriend.username);
        if (tempResponse.ok){
            const response = await tempResponse.json();
            if(response.meta.status){

                showToastMessage(
                    `${suggestedFriend.username} takip edildi.`,
                    ToastMessage.SUCCESS,
                    3000
                )
                setTimeout(()=> {
                    triggerRefresh();
                },3100)
            }
            else {
                showToastMessage(
                    `${response.meta.errorMessage}`,
                    ToastMessage.WARNING,
                    3000
                )
            }
        }
    }

    return (
        <>
            <div className="flex flex-wrap gap-2 items-center justify-between border-b-[1px_solid_black]">
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
                            <CustomAvatar
                                src={suggestedFriend.avatarUrl}
                                title={getNameAndSurnameWithFormatted(suggestedFriend?.name, suggestedFriend?.surname)}
                                alt={suggestedFriend.name}
                                className="cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold"
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "1.5rem",
                                    width: 50,
                                    height: 50
                                }}
                            >
                                {suggestedFriend.name.charAt(0).toUpperCase()}
                            </CustomAvatar>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-sm">
                            {
                                getNameAndSurnameWithFormatted(suggestedFriend?.name, suggestedFriend?.surname)
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
                    onClick={async () => await handleFollowUser(suggestedFriend.username)}
                    className="cursor-pointer bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-200">
                    {
                        t("follow").toUpperCase()
                    }
                </button>
            </div>

        </>
    )
}