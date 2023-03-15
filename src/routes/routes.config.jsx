import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";
import HomeScreen from "screens/HomeScreen/HomeScreen";

export const RouteConfigs = [
    {
        path: "/",
        element: HomeScreen,
        isPrivate: false,
        layout: DefaultLayout,
    }
]