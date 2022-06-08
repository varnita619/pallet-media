const { createSlice, createAsyncThunk, current } = require("@reduxjs/toolkit");
import axios from "axios";
import { followUsersService, getUsers, unfollowUsersService } from "../Services/userServices";


export const getAllUsers = createAsyncThunk('users/getUsers', async () => {
    try {
        const response = await getUsers()
        return response.data.users;
    } catch (error) {
        console.error(error)
    }
})

export const editProfile = createAsyncThunk('users/editProfile', async ({ bio, website, avatar, token }) => {
    try {
        const response = await axios.post('/api/users/edit', { userData: { bio: bio, website: website, avatar: avatar } }, { headers: { authorization: token } });
        console.log(response)
        return response.data.user;

    } catch (error) {
        console.error(error.response);
    }
});

export const followUser = createAsyncThunk('user/getFollow', async ({ followUserId, token }) => {
    try {
        const response = await followUsersService(followUserId, token)
        return response.data;
    } catch (error) {
        console.error(error)
    }
})

export const unfollowUser = createAsyncThunk('user/getFollow', async ({ followUserId, token }) => {
    try {
        const response = await unfollowUsersService(followUserId, token)
        return response.data;
    } catch (error) {
        console.error(error)
    }
})

// If I follow someone, data will update in following[] for me
const updatingFollowingUser = (users, followingUser) => {
    const isUser = users.find((user) => user._id === followingUser._id);

    if (isUser) {
        users = [...users].map((user) =>
            user._id === isUser._id ? followingUser : user
        );
    }

    return users;
};

// If I follow someone, data will update in follower [] of user which is I followed
const updatingFollowedUser = (users, followedUser) => {
    const isUser = users.find((user) => user._id === followedUser._id);

    if (isUser) {
        users = [...users].map((user) =>
            user._id === isUser._id ? followedUser : user
        );
    }

    return users;
};


const initialState = {
    users: [],
    loader: false
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {

        // GetAll Users
        [getAllUsers.pending]: (state) => {
            state.loader = true
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.loader = false
        },
        [getAllUsers.rejected]: (action) => {
            console.error(action.payload);
        },

        // Edit UserDetails
        [editProfile.pending]: (state) => {
            state.loader = true
        },
        [editProfile.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.users = state.users.map((eachUser) => eachUser.username === action.payload.username ? action.payload : eachUser);
            state.loader = false
        },
        [editProfile.rejected]: (action) => {
            console.error(action.payload);
        },

        // Follow User
        [followUser.pending]: (state) => {
            state.loader = true
        },
        [followUser.fulfilled]: (state, action) => {
            const { followUser, user } = action.payload;

            // user as me
            // followUser which mean I follow
            state.users = updatingFollowingUser(current(state).users, user);
            state.users = updatingFollowedUser(current(state).users, followUser);
            state.loader = false
        },
        [followUser.rejected]: (action) => {
            console.error(action.payload);
        },

        // UnFollow User
        [unfollowUser.pending]: (state) => {
            state.loader = true
        },
        [unfollowUser.fulfilled]: (state, action) => {
            const { followUser, user } = action.payload;
            state.users = updatingFollowingUser(current(state).users, user);
            state.users = updatingFollowedUser(current(state).users, followUser);
            state.loader = false
        },
        [unfollowUser.rejected]: (action) => {
            console.error(action.payload);
        },
    },
});

export default userSlice.reducer;
