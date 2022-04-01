"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DialogItem_module_css_1 = __importDefault(require("./DialogItem.module.css"));
const react_router_dom_1 = require("react-router-dom");
const DialogItem = ({ name, id }) => {
    return <div className={DialogItem_module_css_1.default.dialog}>

        <react_router_dom_1.NavLink to={`/dialogs/${id}`} className={data => data.isActive ? DialogItem_module_css_1.default.active : ""}>
            <img className={DialogItem_module_css_1.default.img} src="https://www.pinclipart.com/picdir/big/200-2008697_account-customer-login-man-user-icon-login-icon.png" alt="profile"/>
            <span className={DialogItem_module_css_1.default.name}>{name}</span>
        </react_router_dom_1.NavLink>
    </div>;
};
exports.default = DialogItem;
