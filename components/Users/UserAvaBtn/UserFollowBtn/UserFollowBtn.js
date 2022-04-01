"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UserFollowBtn_module_css_1 = __importDefault(require("./UserFollowBtn.module.css"));
const UserFollowBtn = (props) => {
    let [followCallback, label] = props.followed ? [props.unfollow, "UNFOLLOW"]
        : [props.follow, "FOLLOW"];
    const clickHandler = (userId) => {
        followCallback(userId);
    };
    return (<button disabled={props.followingInProgress.some(id => id === props.id)} className={`${UserFollowBtn_module_css_1.default.button} ${props.followed ? UserFollowBtn_module_css_1.default.followed : ""}`} onClick={() => { clickHandler(props.id); }}>
        {label}
        </button>);
};
exports.default = UserFollowBtn;
