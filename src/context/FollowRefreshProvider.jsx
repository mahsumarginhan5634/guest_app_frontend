import {createContext, useCallback, useContext, useState} from "react";

const FollowRefreshContext = createContext();

export const FollowRefreshProvider = ({children}) => {
    const [isRefreshed , setIsRefreshed] = useState(false);

    const triggerRefresh = useCallback(() => {
        setIsRefreshed((prev) => !prev);
        console.log(isRefreshed)
    },[]);

    return (
        <>
            <FollowRefreshContext.Provider value={{isRefreshed , triggerRefresh}}>
                {children}
            </FollowRefreshContext.Provider>
        </>
    )
}

export const useFollowRefresh = () => useContext(FollowRefreshContext);