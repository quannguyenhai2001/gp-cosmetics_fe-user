import instanceApi from "api/configApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {

};

export const getAllCategories = createAsyncThunk(
    "auth/getAllCategories",
    async (data, { rejectWithValue }) => {
        try {
            const response = await instanceApi.get("/categories/get-all-categories.php");
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: builder => {

    }
})

const { reducer: productReducer, actions } = productSlice
export default productReducer
