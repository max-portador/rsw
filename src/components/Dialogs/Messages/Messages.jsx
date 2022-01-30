import React from "react";
import css from "./Messages.module.css";

const Messages = ({text}) => {
    return <div className={css.message}>
        <img className={css.img}
             src="https://www.pinclipart.com/picdir/big/200-2008697_account-customer-login-man-user-icon-login-icon.png"
             alt="MessageIcon"/>
        <span className={css.text}>{text}</span>
    </div>
}

export default Messages