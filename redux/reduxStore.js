"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const profileReducer_1 = __importDefault(require("./profileReducer"));
const dialogsReducer_1 = __importDefault(require("./dialogsReducer"));
const sidebarReducer_1 = __importDefault(require("./sidebarReducer"));
const usersReducer_1 = __importDefault(require("./usersReducer"));
const authReducer_1 = __importDefault(require("./authReducer"));
let rootReducer = (0, redux_1.combineReducers)({
    profilePage: profileReducer_1.default,
    messagesPage: dialogsReducer_1.default,
    sideBar: sidebarReducer_1.default,
    usersPage: usersReducer_1.default,
    auth: authReducer_1.default,
});
let store = (0, redux_1.createStore)(rootReducer, (0, redux_1.applyMiddleware)(redux_thunk_1.default));
window.store = store;
exports.default = store;
