"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Header_module_css_1 = __importDefault(require("./Header.module.css"));
const Header = (props) => {
    return <header className={Header_module_css_1.default.header}>
        <img src="https://img.icons8.com/nolan/50/venn-diagram.png" alt='header logo'/>
       <div className={Header_module_css_1.default.loginBlock}>
           {props.isAuth
            ? <span>{props.login}</span>
            : <react_router_dom_1.NavLink to={"/login"}>Login</react_router_dom_1.NavLink>}

       </div>
    </header>;
};
exports.default = Header;
