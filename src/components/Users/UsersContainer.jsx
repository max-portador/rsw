import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollow} from "../../redux/usersReducer";
import Users from "./Users";
import PreLoader from "../Profile/PreLoader/PreLoader";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?`
                + `page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setIsFetching(false)
                    this.props.setUsers(response.data.items);
                    let totalCount = response.data.totalCount >=300 ? 300 : response.data.totalCount
                    this.props.setTotalUsersCount(totalCount)

                })
        }
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?`
            + `page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return <>
        {this.props.isFetching ? <PreLoader/> : null}
        <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching})(UsersContainer)