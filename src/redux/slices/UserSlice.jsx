import instanceApi from "api/configApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    user: {},
};

export const postLogin = createAsyncThunk(
    "auth/postLogin",
    async (data, { rejectWithValue }) => {
        try {
            const response = await instanceApi.post("/auth/sign-up.php", data);
            return response.data.result;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
})
const { reducer, actions } = productSlice
export default reducer
