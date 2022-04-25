import React, {FC} from "react";
import css from "./UserFollowBtn.module.css";

export type UserFollowBtnPropsType = {
    id: number,
    followed: boolean,
    followingInProgress: number[],
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

const UserFollowBtn: FC<UserFollowBtnPropsType> = (props) => {
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