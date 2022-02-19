import React from "react";
import UserFollowBtn from "./UserFollowBtn/UserFollowBtn";
import css from "./UserAvaBtn.module.css";

const UserAvaBtn = (props) => {
    return (
        <div className={css.ava_btn}>
            <img className={css.img + " " + (!props.followed || css.followed)} src={props.img} alt="user ava"/>
            <UserFollowBtn followed={props.followed} follow={props.follow} unfollow={props.unfollow} id={props.id}/>
        </div>
    )
}

export default UserAvaBtn;