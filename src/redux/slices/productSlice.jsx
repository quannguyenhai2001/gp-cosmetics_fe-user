import { CallApiByBody, CallApiByParams } from "api/configApi";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    categories: [],
    products: [],
    pageInfo: {},
    manufacturers: [],
    cartDetails: [],
    errorListProducts: false
};

export const fetchAsyncGetProducts = createAsyncThunk(
    "product/fetchAsyncGetProducts",
    async (data, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("products/get-all-products.php", "get", data)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
export const fetchAsyncGetRelativeProducts = createAsyncThunk(
    "product/fetchAsyncGetProducts",
    async (data, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("products/get-all-products.php", "get", data)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const fetchAsyncGetManufactures = createAsyncThunk(
    "product/fetchAsyncGetManufactures",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("manufacturers/get-all-manufacturers.php", "get", null)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
export const fetchAsyncGetDetailProduct = createAsyncThunk(
    "product/fetchAsyncGetDetailProduct",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("products/get-product.php", "get", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);


export const fetchAsyncGetRatings = createAsyncThunk(
    "product/fetchAsyncGetRatings",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("ratings/get-all-ratings.php", "get", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
        },
        deleteListProducts: (state, action) => {
            state.products = []
        },

    },
    extraReducers: builder => {

        builder.addCase(fetchAsyncGetProducts.fulfilled, (state, action) => {
            state.products = action.payload.data
            state.pageInfo = action.payload.pageInfo
        })
        builder.addCase(fetchAsyncGetManufactures.fulfilled, (state, action) => {
            state.manufacturers = action.payload.data

        })
    }
})

const { reducer: productReducer, actions } = productSlice
export const { setCategories, deleteListProducts } = actions
export default productReducer
