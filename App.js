"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const HeaderContainer_1 = __importDefault(require("./components/Header/HeaderContainer"));
const DialogsContainer_1 = __importDefault(require("./components/Dialogs/DialogsContainer"));
const NavContainer_1 = __importDefault(require("./components/Nav/NavContainer"));
const UsersContainer_1 = __importDefault(require("./components/Users/UsersContainer"));
const ProfileContainer_1 = __importDefault(require("./components/Profile/ProfileContainer"));
const Login_1 = __importDefault(require("./components/Login/Login"));
require("./App.css");
const App = () => {
    return <div className='app-wrapper'>
        <HeaderContainer_1.default />
        <NavContainer_1.default />
        <div className='app-wrapper-content'>
                <react_router_dom_1.Route path="/login" component={Login_1.default}/>
                <react_router_dom_1.Route path="/dialogs*" component={DialogsContainer_1.default}/>
                <react_router_dom_1.Route path="/profile/:userId?" component={ProfileContainer_1.default}/>
                <react_router_dom_1.Route path="/users" component={UsersContainer_1.default}/>
        </div>
    </div>;
};
exports.default = App;
