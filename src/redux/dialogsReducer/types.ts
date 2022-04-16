export interface IDialog {
    id: number,
    name: string
}

export interface IMessage {
    message: string
}

export interface DialogsState {
    dialogs: IDialog[],
    messages: IMessage[],
}

export enum DialogsActionsEnum {
    SEND_MESSAGE = "SEND_MESSAGE"
}

export interface SendMessageActionType {
    type: DialogsActionsEnum.SEND_MESSAGE,
    payload: string
}

export type DialogsAction = SendMessageActionType