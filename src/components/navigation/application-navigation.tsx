import { createSwitchNavigator } from "react-navigation";
import { HomeScreen } from "../screens/home-screen";
import { SettingsScreen } from "../screens/settings-screen";

export const ApplicationNavigator = createSwitchNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen
}, {
    initialRouteName: "Home"
});