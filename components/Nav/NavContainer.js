"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Nav_1 = __importDefault(require("./Nav"));
let mapStateToProps = (state) => {
    return {
        friends: state.sideBar.friends,
    };
};
const NavContainer = (0, react_redux_1.connect)(mapStateToProps, null)(Nav_1.default);
exports.default = NavContainer;
