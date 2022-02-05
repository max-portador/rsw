const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const dialogsReducer = (state, action) => {
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