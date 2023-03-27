import instanceApi from "api/configApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    userInfo: {},
    accessToken: ""
};

export const postSignUp = createAsyncThunk(
    "auth/postSignUp",
    async (data, { rejectWithValue }) => {
        try {
            const response = await instanceApi.post("/auth/sign-up.php", data);
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);

export const postSignIn = createAsyncThunk(
    "auth/postSignIn",
    async (data, { rejectWithValue }) => {
        try {
            const response = await instanceApi.post("/auth/sign-in.php", data);
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(postSignIn.fulfilled, (state, action) => {
            state.userInfo = action.payload.data;
            state.accessToken = action.payload.token;
            console.log(action)
            localStorage.setItem('access_token', action.payload.token);
        })
    }
})

const { reducer: userReducer, actions } = userSlice
export default userReducer
