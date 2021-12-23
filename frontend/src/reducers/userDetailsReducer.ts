import {
    IUserDetailActions,
    UserDetailActionTypes,
} from "../schema/action-types/IUserDetailAction"
import { IUserDetailState } from "../schema/state-types/IUserDetailState"

const initState: IUserDetailState = {
    data: {
        loggedIn: false,
        user: {
            firstName: "",
            lastName: "",
            email: "",
        },
    },
    error: "",
    loading: false,
    message: "",
}

export const userDetailsReducer = (
    state = initState,
    action: IUserDetailActions
): IUserDetailState => {
    switch (action.type) {
        case UserDetailActionTypes.SET_USER_DETAILS:
            const dataToUpdate = action.payload

            return {
                ...state,
                data: dataToUpdate,
            }
        default:
            return state
    }
}
