import { ControllerCommand } from "src/models/controller-command.model";

export const ControllerCommands: {[name: string]: ControllerCommand} = {
    getStatus: "getStatus",
    burnMachinePowerOn: "burnMachinePowerOn",
    burnMachinePowerOff: "burnMachinePowerOff",
    burnMachineStartHeating: "burnMachineStartHeating"
}