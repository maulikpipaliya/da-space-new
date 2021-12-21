import { combineReducers } from "redux"
import { UIReducer } from "./uiReducer"

const rootReducer = combineReducers({
    uiState: UIReducer,
})

export { rootReducer }
