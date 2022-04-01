"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const FriendsList_1 = __importDefault(require("./Friends/FriendsList"));
const Nav_module_css_1 = __importDefault(require("./Nav.module.css"));
const Nav = (props) => {
    return <nav className={Nav_module_css_1.default.nav}>
        <div className={Nav_module_css_1.default.links}>
            <react_router_dom_1.NavLink to="/profile" className={navData => navData.isActive ? Nav_module_css_1.default.active : ""}>Profile</react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink to="/dialogs" className={navData => navData.isActive ? Nav_module_css_1.default.active : ""}>Messages</react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink to="/users" className={navData => navData.isActive ? Nav_module_css_1.default.active : ""}>Users</react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink to="/news" className={navData => navData.isActive ? Nav_module_css_1.default.active : ""}>News</react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink to="/music" className={navData => navData.isActive ? Nav_module_css_1.default.active : ""}>Music</react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink to="/settings" className={navData => navData.isActive ? Nav_module_css_1.default.active : ""}>Settings</react_router_dom_1.NavLink>
        </div>

        <FriendsList_1.default friends={props.friends}/>
    </nav>;
};
exports.default = Nav;
