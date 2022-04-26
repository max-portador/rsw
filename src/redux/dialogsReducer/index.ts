import { DialogsActionsEnum, DialogsState } from "./types";
import {InferActionsType} from "../storeTypes";

let initialState: DialogsState = {
    dialogs: [
        {id: 1, name: "Max"}, {id: 2, name: "Alex"},
        {id: 3, name: "Igor"}, {id: 4, name: "Julia"},
    ],
    messages: [
        {message: "Hi"}, {message: "How is your life"},
        {message: "Yo"}, {message: "Hold me tight"},
    ],
};

const dialogsReducer = (state = initialState, action: DialogsActionType): DialogsState => {

    switch (action.type) {
        case DialogsActionsEnum.SEND_MESSAGE:
            let message = action.payload;
            return {
                ...state,
                messages: [...state.messages, {message}],
            }
        default:
            return state;
    }
}


export const actions = {
    sendMessageCreator: (text: string) => ({
            type: DialogsActionsEnum.SEND_MESSAGE,
            payload: text
        })
}

export type DialogsActionType = InferActionsType<typeof actions>

export default dialogsReducer;