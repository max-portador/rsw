import React from "react";
import css from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) => {
    return <div className={css.dialog}>

        <NavLink to={`/dialogs/${id}`} className={data => data.isActive ? css.active : ""}>
            <img className={css.img}
                src="https://www.pinclipart.com/picdir/big/200-2008697_account-customer-login-man-user-icon-login-icon.png"
                alt="profile"/>
            <span className={css.name}>{name}</span>
        </NavLink>
    </div>
}

export default DialogItem