

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    categories: []
};




const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
        },
    },
    extraReducers: builder => {

    }
})

const { reducer: productReducer, actions } = productSlice
export const { setCategories } = actions
export default productReducer
