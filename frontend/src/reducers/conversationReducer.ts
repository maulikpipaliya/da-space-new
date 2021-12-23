import { IConversationActionTypes } from "../schema/action-types/IConversationAction"

const conversationReducer = (state = { conversations: [] }, action) => {
    switch (action.type) {
        case IConversationActionTypes.FETCH_CONVERSATIONS:
            return { ...state, conversations: action.payload }

        case IConversationActionTypes.FETCH_CONVERSATION:
            return { ...state, conversation: action.payload }

        case IConversationActionTypes.CREATE_CONVERSATION:
            return {
                ...state,
                conversations: [...state.conversations, action.payload],
            }
        default:
            return state
    }
}

export default conversationReducer
