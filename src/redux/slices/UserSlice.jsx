import instanceApi, { CallApiByBody } from "api/configApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    userInfo: {},
    accessToken: ""
};

export const fetchAsyncSignUp = createAsyncThunk(
    "auth/fetchAsyncSignUp",
    async (data, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("auth/sign-up.php", "post", data)
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);

export const fetchAsyncSignIn = createAsyncThunk(
    "auth/fetchAsyncSignIn",
    async (data, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("auth/sign-in-user.php", "post", data)
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);

export const fetchAsyncGetUser = createAsyncThunk(
    "auth/fetchAsyncGetUser",
    async (_data, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("auth/get-user.php", "get", null)
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);

export const fetchAsyncUpdateUser = createAsyncThunk(
    "auth/fetchAsyncUpdateUser",
    async (data, { rejectWithValue }) => {
        try {
            instanceApi.defaults.headers["Content-Type"] = "multipart/form-data";
            const response = await CallApiByBody("auth/update-user.php", "post", data)
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
        builder.addCase(fetchAsyncSignIn.fulfilled, (state, action) => {
            state.userInfo = action.payload.data;
            localStorage.setItem('access_token', action.payload.token);
        })
        builder.addCase(fetchAsyncGetUser.fulfilled, (state, action) => {
            state.userInfo = action.payload.data;
        })
    }
})

const { reducer: userReducer } = userSlice
export default userReducer
