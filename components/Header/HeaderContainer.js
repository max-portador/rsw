"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const Header_1 = __importDefault(require("./Header"));
const authReducer_1 = require("../../redux/authReducer");
class HeaderContainer extends react_1.default.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return <Header_1.default {...this.props}/>;
    }
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
exports.default = (0, react_redux_1.connect)(mapStateToProps, { getAuthUserData: authReducer_1.getAuthUserData })(HeaderContainer);
