import { combineReducers } from "redux"
import { UIReducer } from "./uiReducer"
import { userDetailsReducer } from "./userDetailsReducer"

const rootReducer = combineReducers({
    uiState: UIReducer,
    userDetails: userDetailsReducer,
})

export { rootReducer }
