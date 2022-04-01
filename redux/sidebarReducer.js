"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iconUrl = "https://www.pinclipart.com/picdir/big/200-2008697_account-customer-login-man-user-icon-login-icon.png";
let initialState = {
    friends: [
        { name: "Maks", image: iconUrl },
        { name: "Igor", image: iconUrl },
        { name: "Julia", image: iconUrl },
        { name: "Maria", image: iconUrl },
        { name: "Victor", image: iconUrl },
        { name: "Roman", image: iconUrl },
    ]
};
const sidebarReducer = (state = initialState, action) => {
    return state;
};
exports.default = sidebarReducer;
