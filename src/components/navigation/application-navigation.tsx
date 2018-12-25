
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { HomeScreen } from "../screens/home-screen";
import { SettingsScreen } from "../screens/settings-screen";

export const ApplicationNavigator = createMaterialBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen
}, {
        initialRouteName: "Home",
        activeTintColor: "#f0edf6",
        inactiveTintColor: "#3e2465",
        barStyle: { backgroundColor: "#000" }
    });