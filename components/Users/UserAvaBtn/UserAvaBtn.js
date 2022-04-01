"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UserFollowBtn_1 = __importDefault(require("./UserFollowBtn/UserFollowBtn"));
const UserAvaBtn_module_css_1 = __importDefault(require("./UserAvaBtn.module.css"));
const react_router_dom_1 = require("react-router-dom");
const UserAvaBtn = (props) => {
    return (<div className={UserAvaBtn_module_css_1.default.ava_btn}>
            <react_router_dom_1.NavLink to={`/profile/${props.id}`}>
                <img className={UserAvaBtn_module_css_1.default.img + " " + (!props.followed || UserAvaBtn_module_css_1.default.followed)} src={props.img} alt="user ava"/>
            </react_router_dom_1.NavLink>

            <UserFollowBtn_1.default followed={props.followed} follow={props.follow} unfollow={props.unfollow} followingInProgress={props.followingInProgress} id={props.id}/>
        </div>);
};
exports.default = UserAvaBtn;
