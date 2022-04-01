"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_min_1 = require("react-router-dom/cjs/react-router-dom.min");
const withAuthRedirect = (Component) => {
    class RedirectComponent extends react_1.default.Component {
        render() {
            if (!this.props.isAuth) {
                return <react_router_dom_min_1.Redirect to={"/login"}/>;
            }
            return <Component {...this.props}/>;
        }
    }
    let mapStateToPropsForRedirect = state => ({
        isAuth: state.auth.isAuth,
    });
    return (0, react_redux_1.connect)(mapStateToPropsForRedirect)(RedirectComponent);
};
exports.default = withAuthRedirect;
