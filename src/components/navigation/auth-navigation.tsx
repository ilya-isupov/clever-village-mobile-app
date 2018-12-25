import { createSwitchNavigator } from "react-navigation";
import { AuthScreen } from "../screens/auth-screen";
import { ApplicationNavigator } from "./application-navigation";
import { AuthLoadingScreen } from "../screens/auth-loading-screen";

export const MainNavigator = createSwitchNavigator({
    Auth: AuthScreen,
    AuthLoading: AuthLoadingScreen,
    App: ApplicationNavigator
}, {
    initialRouteName: "AuthLoading"
});