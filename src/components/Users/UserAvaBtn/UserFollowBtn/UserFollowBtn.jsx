import React from "react";
import css from "./UserFollowBtn.module.css";
import axios from "axios";
import {followAPI} from "../../../../api/api";

const UserFollowBtn = (props) => {
    if (props.followed) {
        return (
            <button className={css.button + " " + css.followed}
                    onClick={() => {
                        followAPI.unfollow(props.id)
                            .then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(props.id)
                                }
                            })
                    }}>
                UNFOLLOW
            </button>
        )
    } else {
        return (
            <button className={css.button} onClick={() => {
                followAPI.follow(props.id)
                    .then(data => {
                        if (data.resultCode === 0) {
                            props.follow(props.id)
                        }
                    })
            }}>
                FOLLOW
            </button>)
    }

}

export default UserFollowBtn;