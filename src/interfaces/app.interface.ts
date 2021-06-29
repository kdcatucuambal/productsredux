export interface Alert {
    message: string,
    classes: string
}

export interface AppActions {
    type: string;
    payload?: any;
}