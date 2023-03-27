import productReducer from "redux/slices/productSlice";
import userReducer from "redux/slices/userSlice";

const { configureStore } = require("@reduxjs/toolkit");
const rootReducer = {
    user: userReducer,
    products: productReducer
}
const store = configureStore({
    reducer: rootReducer,
})
export default store