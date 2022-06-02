const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";
import toast from "react-hot-toast";
import { getPosts, createPost } from "../Services/postServices";

export const getAllPosts = createAsyncThunk('posts/getPosts', async () => {
    try {
        const { data: { posts }, status } = await getPosts();
        if (status === 200) {
            return posts;
        }
    } catch (error) {
        console.error(error);
    }
});

export const createNewPost = createAsyncThunk('posts/createPost', async ({ content, imgUrl, token }) => {
    try {
        const response = await axios.post('/api/posts', { postData: { content: content, imgUrl: imgUrl, token: token } }, { headers: { authorization: token } });
        return response.data.posts;
    }
    catch (error) {
        console.log(error)
    }
})


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
            state.loader = false;
            state.posts = action.payload;
        },

        [getAllPosts.rejected]: (state) => {
            state.loader = false;
            state.error = "Error occured! Try again later";
        },

        // Creating New Post
        [createNewPost.pending]: (state) => {
            state.loader = true;
        },

        [createNewPost.fulfilled]: (state, action) => {
            state.loader = false;
            state.posts = action.payload;
        },

        [createNewPost.rejected]: (state) => {
            state.loader = false;
            state.error = "Error occured! Try again later";
        },

    }
})

export const { getNewPost } = postSlice.actions;

export default postSlice.reducer;


