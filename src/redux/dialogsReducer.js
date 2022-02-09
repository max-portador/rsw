const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
    dialogs: [
        {id: 1, name: "Max"}, {id: 2, name: "Alex"},
        {id: 3, name: "Igor"}, {id: 4, name: "Julia"},
    ],
    messages: [
        {message: "Hi"}, {message: "How is your life"},
        {message: "Yo"}, {message: "Yo"},
    ],
    newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
        if (state.newMessageText.trim())
        {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];

            let message = state.newMessageText;

            stateCopy.messages.push({message});
            stateCopy.newMessageText = "";
            return stateCopy;
        }
        return state;
        case UPDATE_NEW_MESSAGE_TEXT:
        {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.payload.newMessageText;
            return stateCopy;
        }
        default:
            return state;
    }
}


export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        payload: {newMessageText: text}
    }
}

export default dialogsReducer;