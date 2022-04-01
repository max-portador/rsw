"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FriendsList_module_css_1 = __importDefault(require("./FriendsList.module.css"));
const FriendItem_1 = __importDefault(require("./FriendItem/FriendItem"));
const FriendsList = (props) => {
    return (<div className={FriendsList_module_css_1.default.list}>
            {props.friends.map((d, i) => {
            return <FriendItem_1.default name={d.name} image={d.image} key={i}/>;
        })}
        </div>);
};
exports.default = FriendsList;
