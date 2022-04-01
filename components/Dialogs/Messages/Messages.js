"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Messages_module_css_1 = __importDefault(require("./Messages.module.css"));
const Messages = ({ text }) => {
    return <div className={Messages_module_css_1.default.message}>
        <img className={Messages_module_css_1.default.img} src="https://www.pinclipart.com/picdir/big/200-2008697_account-customer-login-man-user-icon-login-icon.png" alt="MessageIcon"/>
        <span className={Messages_module_css_1.default.text}>{text}</span>
    </div>;
};
exports.default = Messages;
