const SEND_MESSAGE = "SEND_MESSAGE";

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
        {message: "Yo"}, {message: "Hold me tight"},
    ] as MessageType[],
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let message = action.payload.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {message}],
            }
        default:
            return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE,
    payload: {
        newMessageText: string,
    }
}

export const sendMessageCreator = (text: string): SendMessageCreatorActionType => {
    return {
        type: SEND_MESSAGE,
        payload: {newMessageText: text}
    }
}


export default dialogsReducer;