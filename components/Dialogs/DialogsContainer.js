"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WithAuthRedirect_1 = __importDefault(require("../../hoc/WithAuthRedirect"));
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const dialogsReducer_1 = require("../../redux/dialogsReducer");
const Dialogs_1 = __importDefault(require("./Dialogs"));
let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        isAuth: state.auth.isAuth,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageBodyChange: (text) => {
            dispatch((0, dialogsReducer_1.updateNewMessageTextCreator)(text));
        },
        sendMessage: () => {
            dispatch((0, dialogsReducer_1.sendMessageCreator)());
        }
    };
};
exports.default = (0, redux_1.compose)((0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps), WithAuthRedirect_1.default)(Dialogs_1.default);
