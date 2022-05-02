import React, {FC, useEffect, useState} from "react";
import css from "./Dialogs.module.css";

export const AddMessageForm: FC<PropsType> = ({wsChannel}) => {
    let [newMessage, setNewMessage] = useState('')
    let [readyStatus, setReadyStatus] = useState<boolean>(false)

    useEffect(() => {
        let openHandler = () => {
            setReadyStatus(true)
        };
        wsChannel?.addEventListener('open', openHandler)

        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }

    }, [wsChannel])

    const sendMessage = () => {
        if (newMessage.trim()) {

            let time = new Date;

            let hms = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
            let dmy = time.getDate().toString().padStart(2, '0') + "-"
                + time.getMonth().toString().padStart(2, '0') + "-"
                + time.getFullYear();
            let newMessageText = newMessage + ` [at ${hms} ${dmy}]`

            wsChannel?.send(newMessageText)
            setNewMessage('')
        }
    }

    const changeHandler = (e) => {

        setNewMessage(e.currentTarget.value)
    }

    return (
        <div className={css.messageInput}>
            <textarea placeholder={"Введите ваше сообщение"}
                      value={newMessage}
                      onChange={changeHandler}/>
            <button
                disabled={!readyStatus}
                onClick={sendMessage}> Send message
            </button>
        </div>
    );
};

type PropsType = {
    wsChannel: WebSocket | null
}