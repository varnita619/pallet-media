import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postReducer from "./postSlice";
import userReducer  from "./userSlice";

const store = configureStore({
    reducer:{
        auth: authReducer,
        posts: postReducer,
        users: userReducer,
    }
});

export default store;
