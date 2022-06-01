const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import toast from "react-hot-toast";
import { getPosts } from "../Services/postServices";

export const getAllPosts = createAsyncThunk('posts/getPosts', async () => {
    try {
        const response = await getPosts();
        return response.data.posts;
    } catch (error) {
        console.error(error);
    }
});

const initialState = {
    loader: false,
    error: "",
    posts: []
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},

    extraReducers: {
        // Getting All user's posts
        [getAllPosts.pending]: (state) => {
            state.loader = true;
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },

        [getAllPosts.rejected]: (state) => {
            state.loading = false;
            state.error = "Error occured! Try again later";
        },

    }
})

export const { getNewPost } = postSlice.actions;

export default postSlice.reducer;


