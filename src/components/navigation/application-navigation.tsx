import { createBottomTabNavigator } from "react-navigation";
import { HomeScreen } from "../screens/home-screen";
import { SettingsScreen } from "../screens/settings-screen";

export const ApplicationNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen
}, {
        tabBarOptions: {
            labelStyle: {
                color: "#000",
                fontSize: 13
            },
            style: {
                backgroundColor: "#FFF"
            }
        }
    });