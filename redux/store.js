"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const profileReducer_1 = __importDefault(require("./profileReducer"));
const dialogsReducer_1 = __importDefault(require("./dialogsReducer"));
const sidebarReducer_1 = __importDefault(require("./sidebarReducer"));
const iconUrl = "https://www.pinclipart.com/picdir/big/200-2008697_account-customer-login-man-user-icon-login-icon.png";
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "post1", likesCount: 0 },
                { id: 2, message: "post2", likesCount: 23 },
                { id: 3, message: "post3", likesCount: 12 },
                { id: 4, message: "post4", likesCount: 108 },
            ],
            newPostText: "Крыльями маши!"
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: "Max" }, { id: 2, name: "Alex" },
                { id: 3, name: "Igor" }, { id: 4, name: "Julia" },
            ],
            messages: [
                { message: "Hi" }, { message: "How is your life" },
                { message: "Yo" }, { message: "Yo" },
            ],
            newMessageText: "",
        },
        sideBar: {
            friends: [
                { name: "Maks", image: iconUrl },
                { name: "Igor", image: iconUrl },
                { name: "Julia", image: iconUrl },
                { name: "Maria", image: iconUrl },
                { name: "Victor", image: iconUrl },
                { name: "Roman", image: iconUrl },
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("State has been changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = (0, profileReducer_1.default)(this._state.profilePage, action);
        this._state.messagesPage = (0, dialogsReducer_1.default)(this._state.messagesPage, action);
        this._state.sideBar = (0, sidebarReducer_1.default)(this._state.sideBar, action);
        this._callSubscriber(this);
    },
};
exports.default = store;
window.store = store;
