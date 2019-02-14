import { SystemState } from "./system-state.model";

export interface ApplicationState {
    phone: string;
    systemState: SystemState;
    password: string;
    loading: boolean;
    isStatusActual: boolean;
}