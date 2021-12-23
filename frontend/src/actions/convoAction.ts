import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import axios from "axios"
import {
    IConversationAction,
    IConversationActionTypes,
} from "../schema/action-types/IConversationAction"

import { chatData } from "../chatData"

export const fetchConversation = (): ThunkAction<
    void,
    RootState,
    null,
    IConversationAction
> => {
    return async (dispatch) => {
        // dispatch({
        //     type: IConversationActionTypes.FETCH_CONVERSATION,
        //     payload: chatData,
        // })
    }
}
