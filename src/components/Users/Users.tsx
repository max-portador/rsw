import React, {FC} from "react";
import Pagination from "./Pagination/Pagination";
import User from "./User";
import css from "./Users.module.css";
import {IUser} from "../../redux/usersReducer/types";

type UsersPropsType = {
    users: IUser[],
    followingInProgress: number[],
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    portionSize?: number
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChanged: (page: number) => void,
}


const Users: FC<UsersPropsType> = ({users, followingInProgress, follow, unfollow,  ...props}) => {

    return (
        <div className={css.users}>
           <Pagination currentPage = {props.currentPage}
            onPageChanged = {props.onPageChanged}
            totalUsersCount = {props.totalUsersCount}
            pageSize = {props.pageSize}
            portionSize = {props.portionSize}
            />
            {(users.map(user =>
                    <User user={ user }
                          key={ user.id }
                          followingInProgress = {followingInProgress}
                          follow = { follow }
                          unfollow = { unfollow } />
                )
            )}
        </div>
    )
}

export default Users;