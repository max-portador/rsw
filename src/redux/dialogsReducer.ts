const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

type DialogsType = {
    id: number,
    name: string
}

type MessageType = {
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Max"}, {id: 2, name: "Alex"},
        {id: 3, name: "Igor"}, {id: 4, name: "Julia"},
    ] as DialogsType[],
    messages: [
        {message: "Hi"}, {message: "How is your life"},
        {message: "Yo"}, {message: "Yo"},
    ] as MessageType[],
    newMessageText: "" as string,
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            if (state.newMessageText.trim()) {
                let message = state.newMessageText;
                return {
                    ...state,
                    messages: [...state.messages, {message}],
                    newMessageText: ""
                }
            }
            return state;
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.payload.newMessageText,
            };
        }
        default:
            return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
}

export const sendMessageCreator = (): SendMessageCreatorActionType => {
    return {
        type: SEND_MESSAGE,
    }
}

type UpdateNewMessageTextCreatorActionType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT,
    payload: {
        newMessageText: string,
    }
}

export const updateNewMessageTextCreator = (text: string): UpdateNewMessageTextCreatorActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        payload: {newMessageText: text}
    }
}

export default dialogsReducer;