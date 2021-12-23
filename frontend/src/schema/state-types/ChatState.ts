interface IUser {
    id: number
    name: string
    email: string
    phone: string
    address: string
    contact: string
}

interface IMessage {
    id: string
    text: string
    timestamp: number
    user: IUser
}

interface IConversationState {
    id: string
    name: string
    messages: IMessage[]
    users: IUser[]
}

interface ChatState {
    conversationNames: string[]
    conversations: { [key: string]: Conversation }
}
