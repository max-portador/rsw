import React, {FC} from "react";
import UserAvaBtn from "./UserAvaBtn/UserAvaBtn";
import UserBoxInfo from "./UserBoxInfo/UserBoxInfo";
import {user_icon} from "../../redux/usersReducer";
import css from "./Users.module.css";
import {IUser} from "../../redux/usersReducer/types";

type UserPropsType = {
    user: IUser,
    followingInProgress: number[],
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
}


const User:FC<UserPropsType> = ({user, followingInProgress, follow, unfollow}) => {

    return (
        <div>
                <span className={css.user}>
                    <UserAvaBtn id={user.id}
                                img={(user.photos && user.photos.small ? user.photos.small : user_icon)}
                                followed={user.followed}
                                followingInProgress={followingInProgress}
                                follow={follow}
                                unfollow={unfollow}/>

                    <UserBoxInfo followed={user.followed} fullName={user.name}
                                 status={user.status} location={{city: "city", country: "country"}}/>
                </span>
        </div>
    )
}

export default User;