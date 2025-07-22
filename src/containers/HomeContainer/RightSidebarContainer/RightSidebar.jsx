import Birthdays from "./Birthdays.jsx";
import FollowSuggestions from "./FollowSuggestions.jsx";
import UpcomingEvents from "./UpcomingEvents.jsx";

export default function RightSidebar(){
    return (
        <>
            <div className="w-full p-4">
                <Birthdays/>
                <FollowSuggestions/>
                <UpcomingEvents/>
            </div>
        </>
    );
}