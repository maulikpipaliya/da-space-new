import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import axios from "axios"
import { IUIAction, UIActionTypes } from "../schema/action-types/IUIAction"

export const setScreenView = (
    newName: string
): ThunkAction<void, RootState, null, IUIAction> => {
    console.log("setScreenView: " + newName)
    return async (dispatch) => {
        dispatch({
            type: UIActionTypes.SET_SCREEN_VIEW,
            payload: newName,
        })
    }
}
