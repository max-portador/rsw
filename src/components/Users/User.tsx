import React, {FC} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/reduxStore";
import {follow, unfollow, user_icon} from "../../redux/usersReducer";
import {IUser} from "../../redux/usersReducer/types";

import UserAvaBtn from "./UserAvaBtn/UserAvaBtn";
import UserBoxInfo from "./UserBoxInfo/UserBoxInfo";

import css from "./Users.module.css";


const User:FC<UserPropsType> = ({user, followingInProgress}) => {

    const dispatch = useDispatch<AppDispatch>()

    return (
        <div>
                <span className={css.user}>
                    <UserAvaBtn id={user.id}
                                img={(user.photos && user.photos.small ? user.photos.small : user_icon)}
                                followed={user.followed}
                                followingInProgress={ followingInProgress }
                                follow={() => dispatch(follow(user.id))}
                                unfollow={() => dispatch(unfollow(user.id)) }/>

                    <UserBoxInfo followed={user.followed} fullName={user.name}
                                 status={user.status} location={{city: "city", country: "country"}}/>
                </span>
        </div>
    )
}

export default User;

type UserPropsType = {
    user: IUser,
    followingInProgress: number[]
}