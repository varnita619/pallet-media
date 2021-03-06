const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";
import toast from "react-hot-toast";
import { getPosts, likedPostService, dislikedPostService, bookmarkService, removeBookmarkService, editPostServices, deletePostServices, postCommentsServices, editCommentsServices, deleteCommentsServices, getUserPostServices } from "../Services/postServices";

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
        if (response.status === 201) {
            toast.success("New Post added", { position: "top-right" })
        }
        return response.data.posts;
    }
    catch (error) {
        console.error(error)
    }
})


export const likedPosts = createAsyncThunk('posts/likedPosts', async ({ postId, token }) => {
    try {
        const response = await likedPostService(postId, token)
        if (response.status === 201) {
            toast.success("Liked Post", { position: "top-right" })
        }
        return response.data.posts;
    }
    catch (error) {
        console.error(error)
    }
})

export const dislikedPosts = createAsyncThunk('posts/dislikedPosts', async ({ postId, token }) => {
    try {
        const response = await dislikedPostService(postId, token)
        if (response.status === 201) {
            toast.success("Disliked Post", { position: "top-right" })
        }
        return response.data.posts;
    }
    catch (error) {
        console.error(error)
    }
})

export const bookmarkPosts = createAsyncThunk('posts/bookmarkPosts', async ({ postId, token }) => {
    try {
        const response = await bookmarkService(postId, token)
        if (response.status === 200) {
            toast.success("Post added to BookMark", { position: "top-right" })
        }
        return response.data.bookmarks;
    } catch (error) {
        console.error(error)
    }
})

export const removeBookmarkPosts = createAsyncThunk('posts/removeBookmarkPosts', async ({ postId, token }) => {
    try {
        const response = await removeBookmarkService(postId, token)
        if (response.status === 200) {
            toast.success("Post removed from BookMark", { position: "top-right" })
        }
        return response.data.bookmarks;
    } catch (error) {
        console.error(error)
    }
})

export const editPost = createAsyncThunk('/posts/editPosts', async ({ id, content, imgUrl, token }) => {
    try {
        const response = await axios.post(`/api/posts/edit/${id}`, { postData: { content: content, imgUrl: imgUrl, token: token } }, { headers: { authorization: token } })
        if (response.status === 201) {
            toast.success("Post Editted", { position: "top-right" })
        }
        return response.data.posts;
    } catch (error) {
        console.error(error)
    }
})

export const deletePost = createAsyncThunk('/posts/deletePosts', async ({ postId, token }) => {
    try {
        const response = await deletePostServices(postId, token)
        if (response.status === 201) {
            toast.success("Post Deleted", { position: "top-right" })
        }
        return response.data.posts;
    } catch (error) {
        console.log(error)
    }
})

export const postComments = createAsyncThunk('/posts/postComments', async ({ postId, commentData, token }) => {
    try {
        const response = await postCommentsServices(postId, commentData, token)
        if (response.status === 201) {
            toast.success("Comment added", { position: "top-right" })
        }
        return response.data.posts;
    } catch (error) {
        console.log(error)
    }
})

export const editComments = createAsyncThunk(
    'posts/editComments',
    async ({ postId, commentId, commentData, token }) => {
        try {
            const response = await editCommentsServices(postId, commentId, commentData, token);
            if (response.status === 201) {
                toast.success("Comment Updated", { position: "top-right" })
            }
            return response.data.posts;
        } catch (error) {
            console.error(error);
        }
    },
);

export const deleteComments = createAsyncThunk(
    'posts/deleteComments',
    async ({ postId, commentId, token }) => {
        try {
            const response = await deleteCommentsServices(postId, commentId, token);
            if (response.success === 201) {
                toast.success("Comment Deleted", { position: "top-right" })
            }
            return response.data.posts;
        } catch (error) {
            console.error(error);
        }
    },
);

//Trending post
export const getTrendingPosts = createAsyncThunk(
    "posts/trendingPost",
    async ({ trendingPost }) => {
        const data = await trendingPost;
        return data;
    }
);



const initialState = {
    loader: false,
    error: "",
    posts: [],
    bookmark: [],
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

        // Liked Posts
        [likedPosts.fulfilled]: (state, action) => {
            state.loader = false;
            state.posts = action.payload
        },

        [likedPosts.rejected]: (state) => {
            state.loader = false;
        },

        // Dislike Posts
        [dislikedPosts.fulfilled]: (state, action) => {
            state.loader = false;
            state.posts = action.payload
        },

        [dislikedPosts.rejected]: (state) => {
            state.loader = false;
        },

        // BookMark Posts
        [bookmarkPosts.fulfilled]: (state, action) => {
            state.loader = false;
            state.bookmark = action.payload
        },

        [bookmarkPosts.rejected]: (state) => {
            state.loader = false;
        },

        // Remove BookMark Posts
        [removeBookmarkPosts.fulfilled]: (state, action) => {
            state.loader = false;
            state.bookmark = action.payload
        },

        [removeBookmarkPosts.rejected]: (state) => {
            state.loader = false;
        },

        // Edit Posts
        [editPost.pending]: (state) => {
            state.loader = true;
        },

        [editPost.fulfilled]: (state, action) => {
            state.loader = false;
            state.posts = action.payload
        },

        [editPost.rejected]: (state) => {
            state.loader = false;
        },

        // Delete Posts
        [deletePost.fulfilled]: (state, action) => {
            state.loader = false;
            state.posts = action.payload
        },

        [deletePost.rejected]: (state) => {
            state.loader = false;
        },

        // Post Comments
        [postComments.pending]: (state) => {
            state.loader = true;
        },

        [postComments.fulfilled]: (state, action) => {
            state.loader = false;
            state.posts = action.payload
        },

        [postComments.rejected]: (state) => {
            state.loader = false;
        },

        // Edit Comments
        [editComments.pending]: (state) => {
            state.loader = true;
        },

        [editComments.fulfilled]: (state, action) => {
            state.loader = false;
            state.posts = action.payload
        },

        [editComments.rejected]: (state) => {
            state.loader = false;
        },

        // Delete Comments
        [deleteComments.fulfilled]: (state, action) => {
            state.loader = false;
            state.posts = action.payload
        },

        [deleteComments.rejected]: (state) => {
            state.loader = false;
        },

        //Filtered Post
        [getTrendingPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
        },

    }
})

export const { } = postSlice.actions;

export default postSlice.reducer;


