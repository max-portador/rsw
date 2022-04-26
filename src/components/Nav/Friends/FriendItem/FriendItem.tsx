import React, {FC} from "react";
import css from "./FriendItem.module.css";
import {IFriend} from "../../../../redux/sidebarReducer/types";

const Friend: FC<IFriend> = (props) => {
    return (
        <div className={css.friend}>
            <img className={css.img}
                 src={props.image}
                 alt="FriendIcon"/>
            <span className={css.name}>{props.name}</span>
        </div>
    )
}

export default Friend;