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
    switch (action.type){
        case SEND_MESSAGE:
            let message = action.payload.newMessage
            state.messages.push({message});
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.payload.newMessageText;
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = (message) => {
    return {
        type: SEND_MESSAGE,
        payload: {newMessage: message}
    }
}

export const updateNewMessageTextCreator = (text) =>{
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        payload: {newMessageText: text}
    }
}

export default dialogsReducer;