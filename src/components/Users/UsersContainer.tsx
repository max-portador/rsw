import React from "react";
import {connect, ConnectedProps} from "react-redux";
import { compose } from "redux";
import {
    actions,
    follow, requestUsers, unfollow,
} from "../../redux/usersReducer";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching, getPageSize,
    getTotalUsersCount, getUsersSelector
} from "../../redux/usersReducer/users-selector";
import Users from "./Users";
import PreLoader from "../common/PreLoader/PreLoader";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import {RootState} from "../../redux/reduxStore";


class UsersContainer extends React.Component<ConnectorProps> {

    componentDidMount() {
       let { requestUsers, currentPage, pageSize} = this.props
       requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNum) => {
        const {requestUsers, pageSize} = this.props
        requestUsers(pageNum, pageSize)
    }


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


let mapStateToProps = (state: RootState) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

const dispatches = {
    follow, unfollow, requestUsers,
    setCurrentPage: actions.setCurrentPage,
    toggleFollowingProgress: actions.toggleFollowingProgress,
    }

const connector = connect(mapStateToProps, {...dispatches})

export default compose<React.ComponentType>(
    connector,
    withAuthRedirect)(UsersContainer)


type ConnectorProps = ConnectedProps<typeof connector>