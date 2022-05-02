import {DialogsActionsEnum, DialogsState, IMessage} from "./types";
import {InferActionsType} from "../storeTypes";

let initialState: DialogsState = {
    dialogs: [
        {id: 1, name: "Max"}, {id: 2, name: "Alex"},
        {id: 3, name: "Igor"}, {id: 4, name: "Julia"},
    ],
    messages: [
        {message: "Hi", author: "Max"}, {message: "How is your life", author: "Max"},
        {message: "Yo", author: "Max"}, {message: "Yo", author: "Max"},
    ],
};

const dialogsReducer = (state = initialState, action: DialogsActionType): DialogsState => {

    switch (action.type) {
        case DialogsActionsEnum.SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            }
        default:
            return state;
    }
}


export const actions = {
    sendMessageCreator: (message: IMessage) => ({
            type: DialogsActionsEnum.SEND_MESSAGE,
            payload: message
        } as const)
}

export type DialogsActionType = InferActionsType<typeof actions>

export default dialogsReducer;