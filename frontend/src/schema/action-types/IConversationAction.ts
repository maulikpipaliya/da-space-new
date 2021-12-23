import { IConversationState } from "../state-types/ChatState"

export enum IConversationActionTypes {
    FETCH_CONVERSATIONS = "FETCH_CONVERSATIONS",
    FETCH_CONVERSATION = "FETCH_CONVERSATION",
    CREATE_CONVERSATION = "CREATE_CONVERSATION",
}

interface IFetchConversationsAction {
    type: IConversationActionTypes.FETCH_CONVERSATIONS
    payload: IConversationState[]
}

interface IFetchConversationAction {
    type: IConversationActionTypes.FETCH_CONVERSATION
    payload: IConversationState
}

interface ICreateConversationAction {
    type: IConversationActionTypes.CREATE_CONVERSATION
    payload: IConversationState
}


export type IConversationAction = IFetchConversationsAction | IFetchConversationAction | ICreateConversationAction