import { authActionTypes } from "../schema/action-types/IAuthAction"

export const signin = (userData) => async (dispatch) => {
    try {
        dispatch({ type: authActionTypes.AUTH, userData })
    } catch (error) {
        console.log(error)
    }
}
