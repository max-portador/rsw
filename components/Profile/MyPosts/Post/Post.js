"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Post_module_css_1 = __importDefault(require("./Post.module.css"));
const Post = (props) => {
    return <div className={Post_module_css_1.default.item}>
        <img className={Post_module_css_1.default.img} src="https://www.pinclipart.com/picdir/big/200-2008697_account-customer-login-man-user-icon-login-icon.png" alt="profile"/>
        {props.message}
        <div>Like {props.likesCount}</div>
    </div>;
};
exports.default = Post;
