import { PowerStatus } from "./power-status.model";

export interface SystemState {
    airTemperature: string;
    burnTemperature: string;
    burnMachinePower: PowerStatus;
    burnMachineHeating: PowerStatus;
}