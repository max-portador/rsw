import React from "react";
import UserAvaBtn from "./UserAvaBtn/UserAvaBtn";
import UserBoxInfo from "./UserBoxInfo/UserBoxInfo";
import {user_icon} from "../../redux/usersReducer";
import css from "./Users.module.css";

const User = ({user, followingInProgress, follow, unfollow}) => {

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