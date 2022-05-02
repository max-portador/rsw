import React, {FC, useEffect, useState} from 'react';
import {Messages, MessageType} from "./Messages";
import {AddMessageForm} from "./AddMessageForm";


const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const ChatPage: FC = () => {
    const [messages, setMessages] = useState<MessageType[]>([])

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            let newMessages = JSON.parse(e.data);
            setMessages((prevMessages) =>[...prevMessages, ...newMessages])
        })
    })

    const sendMessage = (message: string) => {
        debugger
        ws.send(message)
    }

    return (
        <>
            <Messages messages={messages} />
            <AddMessageForm sendHandler={sendMessage}/>
        </>
    );
};

export default ChatPage



