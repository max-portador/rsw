"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const usersReducer_1 = require("../../redux/usersReducer");
const Users_1 = __importDefault(require("./Users"));
const PreLoader_1 = __importDefault(require("../PreLoader/PreLoader"));
const WithAuthRedirect_1 = __importDefault(require("../../hoc/WithAuthRedirect"));
const redux_1 = require("redux");
class UsersContainer extends react_1.default.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNum) => { this.props.getUsers(pageNum, this.props.pageSize); };
    render() {
        return <>
            {this.props.isFetching ? <PreLoader_1.default /> : null}
            <Users_1.default totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} followingInProgress={this.props.followingInProgress} users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow} onPageChanged={this.onPageChanged}/>
        </>;
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};
exports.default = (0, redux_1.compose)((0, react_redux_1.connect)(mapStateToProps, { follow: usersReducer_1.follow, unfollow: usersReducer_1.unfollow, setCurrentPage: usersReducer_1.setCurrentPage,
    toggleFollowingProgress: usersReducer_1.toggleFollowingProgress, getUsers: usersReducer_1.getUsers, }), WithAuthRedirect_1.default)(UsersContainer);
