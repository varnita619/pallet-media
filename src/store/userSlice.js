const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import { getUsers } from "../Services/userServices";

export const getAllUsers = createAsyncThunk('users/getUsers', async () => {
    try {
        const response = await getUsers()
        return response.data.users;
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    users: [],
    loader: false
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.loader = true
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.loader = false
        },
        [getAllUsers.rejected]: (state, action) => {
            console.error(action.payload);
        },
    },
});

export default userSlice.reducer;
