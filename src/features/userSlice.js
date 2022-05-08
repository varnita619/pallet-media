import {createSlice} from "@reduxjs/toolkit";

// getting token and user from local Storage
const token = localStorage.getItem("login-token") || ""
const user = JSON.parse(localStorage.getItem("user")) || null

export const userSlice = createSlice({
    name: "auth",
    initialState:{
        user:user,
        token:token,
        error:""
    },
    reducers:{
        login:(state,action) =>{
            state.user = action.payload;
        },
        logout: (state) =>{
            state.user = null;
        },
        signup: (state, action) =>{
            state.user = action.payload;
        },
    },
}); 

export const {login, logout, signup} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
