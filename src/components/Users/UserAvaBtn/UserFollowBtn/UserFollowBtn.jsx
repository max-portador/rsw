import React from "react";
import css from "./UserFollowBtn.module.css";
import {followAPI} from "../../../../api/api";

const UserFollowBtn = (props) => {
    if (props.followed) {
        return (
            <button
                disabled={props.followingInProgress.some(id => id === props.id)}
                className={css.button + " " + css.followed}
                onClick={() => {
                    props.toggleFollowingProgress(true, props.id);

                    followAPI.unfollow(props.id).then(data => {
                        if (data.resultCode === 0) {
                            props.unfollow(props.id)
                        }
                    })

                    props.toggleFollowingProgress(false, props.id);

                }}>
                UNFOLLOW
            </button>
        )
    } else {
        return (
            <button
                disabled={props.followingInProgress.some(id => {
                    return id === props.id
                })
                }
                className={css.button}
                onClick={() => {
                    props.toggleFollowingProgress(true, props.id);
                    console.log("Try to follow " + props.id)
                    followAPI.follow(props.id).then(data => {
                        if (data.resultCode === 0) {
                            props.follow(props.id)
                        }
                    })

                    props.toggleFollowingProgress(false, props.id);
                }}>
                FOLLOW
            </button>)
    }

}

export default UserFollowBtn;