import { ApplicationState } from "src/models/application-state.model";
import { SystemState } from "src/models/system-state.model";

export class StateService {
    getInitialApplicationState(): ApplicationState {
        let state: ApplicationState = {
            phone: "",
            password: "",
            loading: true,
            systemState: this.getInitialSystemState(),
            isStatusActual: false
        };
        return state;
    }

    getInitialSystemState(): SystemState {
        let systemState: SystemState = {
            airTemperature: "---",
            burnTemperature: "---",
            burnMachinePower: "---",
            burnMachineHeating: "---"
        };
        return systemState;
    }
}