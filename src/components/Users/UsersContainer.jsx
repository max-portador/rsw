import React from "react";
import {connect} from "react-redux";
import { compose } from "redux";
import {
    follow, requestUsers, setCurrentPage,
    toggleFollowingProgress, unfollow,
} from "../../redux/usersReducer";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching, getPageSize,
    getTotalUsersCount, getUsersSelector
} from "../../redux/users-selector";
import Users from "./Users";
import PreLoader from "../common/PreLoader/PreLoader";
import withAuthRedirect from "../../hoc/WithAuthRedirect";

class UsersContainer extends React.Component {

    componentDidMount() {

       this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNum) => { this.props.requestUsers(pageNum, this.props.pageSize) }


    render() {
        return <>
            {this.props.isFetching ? <PreLoader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                followingInProgress={this.props.followingInProgress}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage,
                                toggleFollowingProgress, requestUsers,}),
    withAuthRedirect
)(UsersContainer)