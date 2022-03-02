import React from "react";
import UserFollowBtn from "./UserFollowBtn/UserFollowBtn";
import css from "./UserAvaBtn.module.css";
import {NavLink} from "react-router-dom";

const UserAvaBtn = (props) => {
    return (
        <div className={css.ava_btn}>
            <NavLink to={`/profile/${props.id}`}>
                <img className={css.img + " " + (!props.followed || css.followed)} src={props.img} alt="user ava"/>
            </NavLink>

            <UserFollowBtn
                followed={props.followed}
                follow={props.follow}
                unfollow={props.unfollow}
                followingInProgress={props.followingInProgress}
                toggleFollowingProgress={props.toggleFollowingProgress}
                id={props.id}/>
        </div>
    )
}

export default UserAvaBtn;