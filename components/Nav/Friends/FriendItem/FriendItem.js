"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FriendItem_module_css_1 = __importDefault(require("./FriendItem.module.css"));
const Friend = (props) => {
    return (<div className={FriendItem_module_css_1.default.friend}>
            <img className={FriendItem_module_css_1.default.img} src={props.image} alt="FriendIcon"/>
            <span className={FriendItem_module_css_1.default.name}>{props.name}</span>
        </div>);
};
exports.default = Friend;
