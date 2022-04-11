import React from "react";
import cn from 'classnames';
import css from "./UserBoxInfo.module.css";

const UserBoxInfo = (props) => {
    return (
        <div className={ cn(css.info_box,
            {
                [css.followed_info_box]: props.followed
            })
        }>
                        <span className={css.info}>
                            <div>{props.fullName}</div>
                            <div>{props.status}</div>
                        </span>
            <span className={css.location}>
                            <div>{props.location.country}</div>
                            <div>{props.location.city}</div>
                        </span>
        </div>
    )
}

export default UserBoxInfo;