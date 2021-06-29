import { SHOW_ALERT, HIDE_ALERT } from "../types";

//Show alert
export function showAlert(alert: any) {
    console.log(alert);
    return (dispatch) => {
        dispatch({
            type: SHOW_ALERT,
            payload: alert
        })
    }
}

//Hide alert
export function hideAlertAction() {
    return (dispatch)=>{
        dispatch({
            type: HIDE_ALERT,
            payload: null
        })
    }
}