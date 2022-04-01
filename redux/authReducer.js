"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthUserData = exports.setAuthUserData = void 0;
const api_1 = require("../api/api");
const SET_USER_DATA = "SET_USER_DATA";
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            };
        }
        default:
            return state;
    }
};
const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, payload: { userId, email, login } });
exports.setAuthUserData = setAuthUserData;
const getAuthUserData = () => dispatch => {
    api_1.authAPI.me().then(content => {
        if (content.resultCode === 0) {
            let { id, login, email } = content.data;
            dispatch((0, exports.setAuthUserData)(id, email, login));
        }
    });
};
exports.getAuthUserData = getAuthUserData;
exports.default = authReducer;
