import { AsyncStorage } from "react-native";
import { StateService } from "./state.service";

export class StoreService {

  stateService: StateService = new StateService();

  getStoredParams = async () => {
    let params = {
      phone: await AsyncStorage.getItem("controllerPhone") || "",
      password: await AsyncStorage.getItem("controllerPassword") || ""
    };
    return params;
  }
}