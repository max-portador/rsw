import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import PreLoader from "../PreLoader/PreLoader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setIsFetching(true)
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.setIsFetching(false)
                    this.props.setUsers(data.items);
                    let totalCount = data.totalCount >= 300 ? 300 : data.totalCount
                    // let totalCount = response.data.totalCount
                    this.props.setTotalUsersCount(totalCount)

                })
        }
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum)
        this.props.setIsFetching(true)
        usersAPI.getUsers(pageNum, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setIsFetching(false)
            })
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
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                onPageChanged={this.onPageChanged}
            />
        </>
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
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers, setCurrentPage,
        setTotalUsersCount, setIsFetching, toggleFollowingProgress
    })(UsersContainer)