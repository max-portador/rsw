import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import css from "./Dialogs.module.css";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    return <div className={css.dialogs}>
        <div className={css.dialogsItems}>
            {props.state.dialogs.map((d, i) => {
                return <DialogItem name={d.name} id={d.id} key={i}/>
            })}
        </div>
        <div className={css.messages}>
            {
                props.state.messages.map((d, i) => {
                    return <Messages key={i} text={d.message}/>
                })
            }
        </div>
    </div>
}

export default Dialogs