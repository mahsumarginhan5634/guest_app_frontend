import Birthdays from "./Birthdays.jsx";
import FriendSuggestions from "./FriendSuggestions.jsx";
import UpcomingEvents from "./UpcomingEvents.jsx";

export default function RightSidebar(){
    return (
        <>
            <div className="w-full p-4">
                <Birthdays/>
                <FriendSuggestions/>
                <UpcomingEvents/>
            </div>
        </>
    );
}