import { CallApiByBody, CallApiByParams } from "api/configApi";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    categories: [],
    products: [],
    pageInfo: {},
    manufacturers: [],
    carts: [],
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

export const fetchAsyncGetAllBills = createAsyncThunk(
    "product/fetchAsyncGetAllBills",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("bills/get-all-bills.php", "get", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const fetchAsyncGetAllBillDetails = createAsyncThunk(
    "product/fetchAsyncGetAllBillDetails",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("bill-details/get-all-bill-details.php", "get", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const fetchAsyncGetAllCarts = createAsyncThunk(
    "product/fetchAsyncGetAllCarts",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("carts/get-all-carts.php", "get", null)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
export const fetchAsyncCreateCart = createAsyncThunk(
    "product/fetchAsyncCreateCart",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("carts/create-cart.php", "POST", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
export const fetchAsyncUpdateCart = createAsyncThunk(
    "product/fetchAsyncUpdateCart",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("carts/update-cart.php", "PUT", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
export const fetchAsyncDeleteCart = createAsyncThunk(
    "product/fetchAsyncDeleteCart",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("carts/delete-cart.php", "DELETE", arg)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const fetchAsyncGetAllSizes = createAsyncThunk(
    "product/fetchAsyncGetAllSizes",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("sizes/get-all-sizes.php", "get", arg)
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

            if (action.payload.data.length > 0) {
                state.products = action.payload.data
                state.pageInfo = action.payload.pageInfo
                state.errorListProducts = false
            }
            else {
                state.products = []
                state.pageInfo = []
                state.errorListProducts = true
            }
        })

        builder.addCase(fetchAsyncGetManufactures.fulfilled, (state, action) => {
            state.manufacturers = action.payload.data

        })
        builder.addCase(fetchAsyncGetAllCarts.fulfilled, (state, action) => {
            state.carts = action.payload.data

        })
    }
})

const { reducer: productReducer, actions } = productSlice
export const { setCategories, deleteListProducts } = actions
export default productReducer
