import React, {useState} from "react";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import css from "./Dialogs.module.css";

const Dialogs = (props) => {
    let dialogItems = props.dialogs.map((d, i) => <DialogItem key={i} name={d.name} id={d.id} /> )
    let messages = props.messages.map((d, i) => <Messages key={i} text={d.message}/> )

    let [newMessage, setNewMessage] = useState('')

    const changeHandler = (e) => { setNewMessage(e.currentTarget.value) }

    const clickHandler = () => {
        if (newMessage.trim()){
            props.sendMessage(newMessage)
            setNewMessage('')
        }

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
                    <textarea placeholder={"Введите ваше сообщение"}
                              value={newMessage} onChange={changeHandler}/>
                    <button onClick={clickHandler}> Send message </button>
            </div>

        </div>
    </div>
}

export default Dialogs