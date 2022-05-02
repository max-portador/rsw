import React, {FC, useEffect, useState} from "react";
import Message from "./Messages/Message";
import css from "./Dialogs.module.css";


export const Messages: FC<PropsType> = ({ wsChannel}) => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [mesRef, setMesRef] = useState(React.createRef<HTMLDivElement>())

    const scrollToBottom = () => {
        mesRef.current.scrollTop = mesRef.current.scrollHeight;
    };

    useEffect(() => {
        scrollToBottom()
        let messageHandler = (e:MessageEvent) => {
            let newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
            scrollToBottom()
        };
        wsChannel?.addEventListener('message', messageHandler)
        return () => wsChannel?.removeEventListener('message', messageHandler)
    }, [wsChannel])

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

export type MessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

type PropsType = {
    wsChannel: WebSocket | null
}
