import reducerUser from "redux/slices/UserSlice";

const { configureStore } = require("@reduxjs/toolkit");
const rootReducer = {
    user: reducerUser,
}
const store = configureStore({
    reducer: rootReducer,
})
export default store