import React from "react";
import css from "./FriendItem.module.css";

const Friend = (props) => {
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