import React, {FC} from "react";
import UserFollowBtn, {UserFollowBtnPropsType} from "./UserFollowBtn/UserFollowBtn";
import {NavLink} from "react-router-dom";
import cn from 'classnames';
import css from "./UserAvaBtn.module.css";

export type UserAvaBtnPropsType = UserFollowBtnPropsType & { img: string }

const UserAvaBtn:FC<UserAvaBtnPropsType> = (props) => {
    return (
        <div className={css.ava_btn}>
            <NavLink to={`/profile/${props.id}`}>
                <img className={ cn(css.img, {[css.followed]: props.followed} ) } src={props.img} alt="user ava"/>
            </NavLink>

            <UserFollowBtn
                followed={props.followed}
                follow={props.follow}
                unfollow={props.unfollow}
                followingInProgress={props.followingInProgress}
                id={props.id}/>
        </div>
    )
}

export default UserAvaBtn;