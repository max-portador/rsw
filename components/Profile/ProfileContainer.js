"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Profile_1 = __importDefault(require("./Profile"));
const react_redux_1 = require("react-redux");
const profileReducer_1 = require("../../redux/profileReducer");
const react_router_dom_1 = require("react-router-dom");
const WithAuthRedirect_1 = __importDefault(require("../../hoc/WithAuthRedirect"));
const redux_1 = require("redux");
class ProfileContainer extends react_1.default.Component {
    componentDidMount() {
        let userId = this.props.match.params["userId"] || this.props.myId;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return <Profile_1.default status={this.props.status} profile={this.props.profile} updateStatus={this.props.updateStatus} myId={this.props.myId}/>;
    }
}
let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.userId
});
exports.default = (0, redux_1.compose)((0, react_redux_1.connect)(mapStateToProps, { getUserProfile: profileReducer_1.getUserProfile, getStatus: profileReducer_1.getStatus, updateStatus: profileReducer_1.updateStatus }), react_router_dom_1.withRouter, WithAuthRedirect_1.default)(ProfileContainer);
