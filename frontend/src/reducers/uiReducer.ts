import { IUIAction, UIActionTypes } from "../schema/action-types/IUIAction"
import { IUIState } from "../schema/state-types/IUIState"

const initState: IUIState = {
    data: {
        screenView: "chat",
    },
}

export const UIReducer = (state = initState, action: IUIAction): IUIState => {
    switch (action.type) {
        case UIActionTypes.SET_SCREEN_VIEW:
            console.log("UIReducer: " + action.payload)
            const screenView = action.payload

            return {
                ...state,
                data: {
                    screenView,
                },
                loading: false,
            }
        default:
            return state
    }
}
