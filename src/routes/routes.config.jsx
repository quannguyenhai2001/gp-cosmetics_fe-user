import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";
import HomeScreen from "screens/HomeScreen/HomeScreen";
import SignInScreen from "screens/SignInSreen/SignInSreen";
import SignUpScreen from "screens/SignUpSreen/SignUpSreen";

export const RouteConfigs = [
    {
        path: "/",
        element: HomeScreen,
        isPrivate: false,
        layout: DefaultLayout,
    },
    {
        path: "/sign-up",
        element: SignUpScreen,
        isPrivate: false,
        layout: DefaultLayout,
    },
    {
        path: "/sign-in",
        element: SignInScreen,
        isPrivate: false,
        layout: DefaultLayout,
    }
]