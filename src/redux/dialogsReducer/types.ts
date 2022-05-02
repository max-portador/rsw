export interface IDialog {
    id: number,
    name: string
}

export interface IMessage {
    message: string
    author: string
}

export interface DialogsState {
    dialogs: IDialog[],
    messages: IMessage[],
}

export enum DialogsActionsEnum {
    SEND_MESSAGE = "SEND_MESSAGE"
}