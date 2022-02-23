import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?`
                + `page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    let totalCount = response.data.totalCount >=300 ? 300 : response.data.totalCount
                    this.props.setTotalUsersCount(totalCount)
                })
        }
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?`
            + `page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {

        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
        />
    }
}




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNum) => {
            dispatch(setCurrentPageAC(pageNum))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)