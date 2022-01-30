import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import css from "./Dialogs.module.css";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    return <div className={css.dialogs}>
        <div className={css.dialogsItems}>
            {props.state.dialogs.map(d => {
                return <DialogItem name={d.name} id={d.id}/>
            })}
        </div>
        <div className={css.messages}>
            {
                props.state.messages.map((d, i) => {
                    return <Messages id={i} text={d.message}/>
                })
            }
        </div>
    </div>
}

export default Dialogs