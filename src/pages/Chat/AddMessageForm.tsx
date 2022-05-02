import React, {FC, useState} from "react";
import css from "./Dialogs.module.css";

export const AddMessageForm:FC<PropsType> = ({sendHandler}) => {
    let [newMessage, setNewMessage] = useState<string>('')

    const changeHandler = (e) => {
        setNewMessage(e.currentTarget.value)
    }

    const clickHandler = () => {
        if (newMessage.trim()) {
            sendHandler(newMessage)
            setNewMessage('')
        }
    }

    return (
        <div className={css.messageInput}>
                    <textarea placeholder={"Введите ваше сообщение"}
                              value={newMessage} onChange={changeHandler}/>
            <button onClick={clickHandler}> Send message</button>
        </div>
    );
};

type PropsType = {
    sendHandler: (message: string) => void
}