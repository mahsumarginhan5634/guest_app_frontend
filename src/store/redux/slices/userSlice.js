import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage, setUserToLocalStorage } from "../../localStorage";

const userInitialState = {
    user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        loginUser(state, action) {
            setUserToLocalStorage(action.payload);
            state.user = action.payload;
        },
        logoutUser(state) {
            state.user = null;
        },
    },
});

export const { loginUser, logoutUser, getUserFromSlice } = userSlice.actions;
export default userSlice.reducer;
