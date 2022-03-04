import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import css from "./Dialogs.module.css";

const Dialogs = (props) => {

    let sendMessage = () => {
        props.sendMessage();
    }

    let changeHandler = (e) => {
        let text = e.target.value;
        props.onMessageBodyChange(text);
    }

    let dialogItems = props.dialogs.map((d, i) => {
        return <DialogItem name={d.name} id={d.id} key={i}/>
    })

    let messages = props.messages.map((d, i) => {
        return <Messages key={i} text={d.message}/>
    })

    if (!props.isAuth){
        return <Redirect to={'/login'} />
    }


    return <div className={css.dialogs}>
        <div className={css.dialogsItems}>
            {dialogItems}
        </div>

        <div className={css.messageArea}>
            <div className={css.messages}>
                {messages}
            </div>
            <div className={css.messageInput}>
                <textarea value={props.newMessageText} onChange={changeHandler}
                          placeholder="Enter your message"/>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    </div>
}

export default Dialogs