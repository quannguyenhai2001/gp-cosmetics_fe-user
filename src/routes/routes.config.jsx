import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";
import HomeScreen from "screens/HomeScreen/HomeScreen";
import SignUpUserScreen from "screens/SignUpSreen/SignUpSreen";

export const RouteConfigs = [
    {
        path: "/",
        element: HomeScreen,
        isPrivate: false,
        layout: DefaultLayout,
    },
    {
        path: "/sign-up",
        element: SignUpUserScreen,
        isPrivate: false,
        layout: DefaultLayout,
    }
]