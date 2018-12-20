import { NavigationScreenProp, NavigationParams } from "react-navigation";
import { ApplicationState } from "./application-state.model";

export interface ApplicationProps {
    navigation: NavigationScreenProp<ApplicationState, NavigationParams>;
}