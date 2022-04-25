import React from "react";
import {connect} from "react-redux";
import { compose } from "redux";
import {
    actions,
    follow, requestUsers, unfollow, UserActionsType,
} from "../../redux/usersReducer";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching, getPageSize,
    getTotalUsersCount, getUsersSelector
} from "../../redux/usersReducer/users-selector";
import Users from "./Users";
import PreLoader from "../common/PreLoader/PreLoader";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import {IUser } from "../../redux/usersReducer/types";
import {RootState} from "../../redux/reduxStore";

type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    followingInProgress: number[],
    users: IUser[],
}

type MapDispatchPropsType = {
    requestUsers: (page: number, pageSize: number) => void,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage: (pageNum: number) => UserActionsType,
    toggleFollowingProgress: (isFetching: boolean, userId: number) => UserActionsType
}


type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType



class UsersContainer extends React.Component<UsersContainerPropsType> {

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


let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

const dispatches: MapDispatchPropsType = {
    follow, unfollow, requestUsers,
    setCurrentPage: actions.setCurrentPage,
    toggleFollowingProgress: actions.toggleFollowingProgress,
    }

export default compose<React.Component>(
    connect<MapStatePropsType, MapDispatchPropsType, unknown, RootState>(mapStateToProps, {...dispatches}),
    withAuthRedirect)(UsersContainer)