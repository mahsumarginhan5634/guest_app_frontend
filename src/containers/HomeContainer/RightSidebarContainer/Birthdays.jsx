import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import {getUserFromLocalStorage} from "../../../store/localStorage.js";
import {useEffect, useState} from "react";
import {getMyFollowedsBirthdays} from "../../../services/UserFollowService.js";
import {Skeleton} from "@mui/material";
import {useFollowRefresh} from "../../../context/FollowRefreshProvider.jsx";
export default function Birthdays(){

    const user = getUserFromLocalStorage();
    const [myFollowingsBirthdays , setMyFollowingsBirthdays] = useState([]);
    const [isRequestPending, setIsRequestPending] = useState(false);
    const {isRefreshed} = useFollowRefresh();

    const getMyFollowingBirthdays = async (userId) => {
        try{
            setIsRequestPending(true);
            const tempResponse = await getMyFollowedsBirthdays(userId);
            if(tempResponse.status){
                const response = await tempResponse.json();
                setMyFollowingsBirthdays(response.data);
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
        if(user){
            const executeThisMethod = async () => {
                await getMyFollowingBirthdays(user?.id);
            }
            executeThisMethod();
        }
    }, [isRefreshed]);



    return (
        <>
                {
                    isRequestPending ?
                        (
                            <div className="bg-white rounded-lg shadow p-4 pb-0 mb-6">
                                <Skeleton/>
                                <Skeleton height={90}/>
                            </div>
                        )
                        :
                        myFollowingsBirthdays.length > 0 &&
                        (
                            <div className="bg-white rounded-lg shadow p-4 mb-6">
                                <h3 className="font-bold text-lg mb-4">Doğum Günleri</h3>
                                <div className="flex space-x-3 mb-3 flex-col gap-y-3 justify-items-center">
                                    {
                                        myFollowingsBirthdays.map((myFollowing, index) => (
                                            <div
                                                className={"flex flex-row items-center  p-2 gap-x-2 bg-gray-200 rounded-lg  w-full"}
                                                key={index}>
                                                <div className="bg-blue-100 p-2 rounded-full">
                                                    <CardGiftcardIcon
                                                        className="w-6 h-6 text-blue-600"
                                                    />
                                                </div>
                                                <p className="text-sm">
                                                    Bugün
                                                    <span className="font-semibold">
                                                    {" " + myFollowing.name.substring(0, 1).toUpperCase() + myFollowing.name.substring(1)}
                                                    {" " + myFollowing.surname.substring(0, 1).toUpperCase() + myFollowing.surname.substring(1)}
                                                    </span>'in doğum günü.
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                }
            </>
            );
            }