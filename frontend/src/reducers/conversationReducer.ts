import { IConversationActionTypes } from "../schema/action-types/IConversationAction"
import { chatData } from "../chatData"

const initState = chatData

const conversationReducer = (state = initState, action) => {
    switch (action.type) {
        case IConversationActionTypes.FETCH_CONVERSATIONS:
            return { ...state, conversations: action.payload }

        case IConversationActionTypes.FETCH_CONVERSATION:
            return { ...state, conversation: action.payload }

        default:
            return state
    }
}

export default conversationReducer
