import React, {FC, useEffect, useState} from 'react';
import {Messages} from "./Messages";
import {AddMessageForm} from "./AddMessageForm";

const ChatPage: FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: FC = () => {
    let [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let ws: WebSocket;

        let closeHandler = () => {
            console.log('WS CLOSED')
            setTimeout( createChannel, 3000)
        };

        function createChannel(){
            if (ws !== null ){
                ws?.removeEventListener('close', closeHandler)
                ws?.close()
            }
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            ws?.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }

        createChannel()

        return () => {
            ws?.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])


    return (
        <>
            <Messages wsChannel={wsChannel} />
            <AddMessageForm wsChannel={wsChannel}/>
        </>
    );
};

export default ChatPage



