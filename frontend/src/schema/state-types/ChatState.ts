export interface IUser {
    id: number
    name: string
    email: string
    phone: string
    address: string
    contact: string
}

export interface IMessage {
    id: string
    text: string
    timestamp: number
    user: IUser
}

export interface IConversationState {
    id: string
    name: string
    messages: IMessage[]
    users: IUser[]
}

export interface ChatState {
    conversationNames: string[]
    conversations: { [key: string]: IConversationState }
}
