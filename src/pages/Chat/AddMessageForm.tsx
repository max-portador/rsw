import React, {FC, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/reduxStore";
import {sendMessage} from "../../redux/chatReducer";
import css from "./Dialogs.module.css";

function addTimeLabel(message: string) {
    let time = new Date;
    let hms = time.getHours()
        + ":" + time.getMinutes().toString().padStart(2, '0')
        + ":" + time.getSeconds().toString().padStart(2, '0');
    let dmy = time.getDate().toString().padStart(2, '0') + "-"
        + time.getMonth().toString().padStart(2, '0') + "-"
        + time.getFullYear();
   return message + ` [at ${hms} ${dmy}]`
}


export const AddMessageForm: FC = () => {
    let [newMessage, setNewMessage] = useState('')
    const dispatch = useDispatch<AppDispatch>()

    const sendMessageHandler = () => {
        if (newMessage.trim()) {
            dispatch(sendMessage(addTimeLabel(newMessage.trim())))
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
                onClick={sendMessageHandler}> Send message
            </button>
        </div>
    );
};