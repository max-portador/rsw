import React, {FC, useEffect, useState} from "react";
import Message from "./Messages/Message";
import css from "./Dialogs.module.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";


export const Messages: FC = () => {
    const messages = useTypedSelector(state => state.chats.messages)
    const [mesRef] = useState(React.createRef<HTMLDivElement>())

    const scrollToBottom = () => {
        mesRef.current.scrollTop = mesRef.current.scrollHeight;
    };

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    return (
        <div className={css.messages} ref={mesRef}>
            {messages.map((m, i) =>
                <Message
                    key={i}
                    message={m.message}
                    userName={m.userName}
                    photo={m.photo}
                    userId={m.userId}
                />)}
        </div>
    );
};
