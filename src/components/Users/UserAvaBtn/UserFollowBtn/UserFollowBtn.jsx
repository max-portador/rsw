import React from "react";
import css from "./UserFollowBtn.module.css";
import {followAPI} from "../../../../api/api";

const UserFollowBtn = (props) => {
    let [APIcallback, followCallback, label] = props.followed
        ? [followAPI.unfollow, props.unfollow, "UNFOLLOW"]
        : [followAPI.follow, props.follow, "FOLLOW"]

    const clickHandler = (id_list, userId, toggle) => {
        toggle(true, userId);

        APIcallback(userId).then(data => {
            if (data.resultCode === 0) {
                followCallback(userId)
            }
        }).finally(() => {
            toggle(false, userId)
        })
    }

    return <button
        disabled={props.followingInProgress.some(id => id === props.id)}
        className={`${css.button} ${css.followed}`}
        onClick={() => {
            clickHandler(props.followingInProgress,
            props.id,
            props.toggleFollowingProgress)
        }}>
        {label}
    </button>
}

export default UserFollowBtn;