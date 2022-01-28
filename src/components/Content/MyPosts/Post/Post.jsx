import React from "react";
import css from "./Post.module.css";

const Post = (props) => {
    return <div className={css.item} >
        <img
            className={css.img}
            src="https://www.pinclipart.com/picdir/big/200-2008697_account-customer-login-man-user-icon-login-icon.png"
            alt="profile"/>
        {props.message}
        <div>Like {props.likesCount}</div>
    </div>
}

export default Post