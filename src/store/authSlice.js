import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// getting token and userInfo from local Storage
const token = localStorage.getItem("login-Token") || ""
const userInfo = JSON.parse(localStorage.getItem("user")) || null
const initialState = {
    userInfo: userInfo,
    token: token
}

export const logoutHandler = createAsyncThunk("auth/getLogout", () =>{
    localStorage.removeItem("login-Token")
    localStorage.removeItem("user")
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authInfo: (state, action) => {
            state.userInfo = action.payload
        },
        getToken: (state, action) => {
            state.token = action.payload
        }
    }
})

export const { authInfo, getToken } = authSlice.actions;

export default authSlice.reducer;
