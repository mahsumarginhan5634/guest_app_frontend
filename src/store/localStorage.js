export const setUserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const setAccessToken = (value) => {
    localStorage.setItem("accessToken", value);
};

export const getAccessToken = () => {
    return localStorage.getItem("accessToken");
};

export const setRefreshToken = (value) => {
    localStorage.setItem("refreshToken", value);
};

export const getRefreshToken = () => {
    return localStorage.getItem("refreshToken");
};

export const setLastVisitedPath = (value) => {
    localStorage.setItem("lastVisitedPath", value);
}

export const getLastVisitedPath = () => {
    return localStorage.getItem("lastVisitedPath");
}

export const clearLocalStorage = () => {
    localStorage.clear();
};
