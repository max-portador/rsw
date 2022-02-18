import React from "react";
import css from "./UserFollowBtn.module.css";

const UserFollowBtn = (props) => {
    if (props.followed) {
        return (
            <button className={css.button + " " + css.followed}
                    onClick={() => { props.unfollow(props.id)}}>
                UNFOLLOW
            </button>
        )
    } else {
        return (
            <button className={css.button} onClick={() => { props.follow(props.id) }}>
                FOLLOW
            </button>)
    }

}

export default UserFollowBtn;