"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNewMessageTextCreator = exports.sendMessageCreator = void 0;
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
let initialState = {
    dialogs: [
        { id: 1, name: "Max" }, { id: 2, name: "Alex" },
        { id: 3, name: "Igor" }, { id: 4, name: "Julia" },
    ],
    messages: [
        { message: "Hi" }, { message: "How is your life" },
        { message: "Yo" }, { message: "Yo" },
    ],
    newMessageText: "",
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (state.newMessageText.trim()) {
                debugger;
                let message = state.newMessageText;
                return {
                    ...state,
                    messages: [...state.messages, { message }],
                    newMessageText: ""
                };
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
};
const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    };
};
exports.sendMessageCreator = sendMessageCreator;
const updateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        payload: { newMessageText: text }
    };
};
exports.updateNewMessageTextCreator = updateNewMessageTextCreator;
exports.default = dialogsReducer;
