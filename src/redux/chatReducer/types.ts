export type MessageAPIType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

export type MessageType = {
    id: string
} & MessageAPIType

export enum ChatsTypeActionEnum {
    MESSAGES_RECEIVED = 'MESSAGES_RECEIVED',
    STATUS_CHANGED = 'STATUS_CHANGED'
}

