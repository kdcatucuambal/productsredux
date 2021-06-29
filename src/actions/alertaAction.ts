
import { Dispatch } from "redux";
import { Alert, AppActions } from "../interfaces/app.interface";
import { SHOW_ALERT, HIDE_ALERT } from "../types";

//Show alert
export function showAlert(alert: Alert) {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch({
            type: SHOW_ALERT,
            payload: alert
        })
    }
}

//Hide alert
export function hideAlertAction() {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch({
            type: HIDE_ALERT,
            payload: null
        })
    }
}