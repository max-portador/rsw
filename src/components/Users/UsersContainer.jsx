import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress, unfollow,
} from "../../redux/usersReducer";
import Users from "./Users";
import PreLoader from "../PreLoader/PreLoader";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

class UsersContainer extends React.Component {

    componentDidMount() {
        // if (this.props.users.length === 0) {}
       this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNum) => { this.props.getUsers(pageNum, this.props.pageSize) }


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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let withRedirect = WithAuthRedirect(UsersContainer)

export default connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers,
    })(withRedirect)