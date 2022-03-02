import React from "react";
import css from "./UserFollowBtn.module.css";
import axios from "axios";

const UserFollowBtn = (props) => {
    if (props.followed) {
        return (
            <button className={css.button + " " + css.followed}
                    onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                            {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "0ba318fc-0fe2-47ea-8841-df74f5ee4690",
                                }
                            })
                            .then(response => {
                                if (response.data.resultCode == 0) {
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
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                    {},
                    {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "0ba318fc-0fe2-47ea-8841-df74f5ee4690",
                        }
                    })
                    .then(response => {
                        if (response.data.resultCode == 0) {
                            props.follow(props.id)
                        }
                    })
            }}>
                FOLLOW
            </button>)
    }

}

export default UserFollowBtn;