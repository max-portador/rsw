import React, {FC} from "react";
import cn from 'classnames';
import css from "./UserBoxInfo.module.css";

type UserBoxInfoProps = {
    fullName: string,
    status?: string,
    followed: boolean,
    location: {
        city: string,
        country: string
    }
}

const UserBoxInfo: FC<UserBoxInfoProps> = (props) => {
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