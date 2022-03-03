import React from "react";
import css from "./UserFollowBtn.module.css";
import {followAPI} from "../../../../api/api";

const UserFollowBtn = (props) => {
    let [followCallback, label] = props.followed ? [props.unfollow, "UNFOLLOW"]
                                                 : [props.follow, "FOLLOW"]

    const clickHandler = (userId) => {
        followCallback(userId)
    }

    return (
        <button disabled={props.followingInProgress.some(id => id === props.id)}
                className={`${css.button} ${ props.followed ? css.followed : ""}`}
                onClick={() => { clickHandler(props.id) }}>
        {label}
        </button>)
}

export default UserFollowBtn;