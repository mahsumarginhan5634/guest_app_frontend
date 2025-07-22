import HomeContainer from "../../containers/HomeContainer/HomeContainer.jsx";
import {FollowRefreshProvider} from "../../context/FollowRefreshProvider.jsx";

export default function Home () {
    return (
        <>
            <FollowRefreshProvider>
                <HomeContainer/>
            </FollowRefreshProvider>
        </>
    )
}