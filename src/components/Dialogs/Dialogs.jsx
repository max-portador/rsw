import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
import css from "./Dialogs.module.css";

const Dialogs = (props) => {

    let sendMessage = () => {
        let text = props.state.newMessageText;
        if (text) props.dispatch(sendMessageCreator(text))
    }

    let changeHandler = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextCreator(text));
    }

    let dialogItems = props.state.dialogs.map((d, i) => {
        return <DialogItem name={d.name} id={d.id} key={i}/>
    })

    let messages = props.state.messages.map((d, i) => {
        return <Messages key={i} text={d.message}/>
    })

    return <div className={css.dialogs}>
        <div className={css.dialogsItems}> {dialogItems} </div>
        <div className={css.messageArea}>
            <div className={css.messages}> {messages} </div>
            <div className={css.messageInput}>
                <textarea value={props.state.newMessageText}
                          onChange={changeHandler}
                          placeholder="Enter your message"
                />
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    </div>
}

export default Dialogs