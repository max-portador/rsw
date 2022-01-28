import React from "react";
import css from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) => {
    return <div className={css.dialog}>
        <NavLink to={`/dialogs/${id}`} className={data => data.isActive ? css.active : ""} >{name}</NavLink>
    </div>
}
const Messages = ({text}) => {
    return <div className={css.message}>{text}</div>
}

const Dialogs = (props) => {
    return <div className={css.dialogs}>
        <div className={css.dialogsItems}>
            <DialogItem id="1" name="Max"/>
            <DialogItem id="2" name="Alex"/>
            <DialogItem id="3" name="Igor"/>
            <DialogItem id="4" name="Julia"/>
        </div>
        <div className={css.messages}>
            <Messages text="Hi"/>
            <Messages text="How is your life"/>
            <Messages text="Yo"/>
        </div>
    </div>
}

export default Dialogs