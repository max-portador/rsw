import React, {FC, useEffect} from 'react';
import {Messages} from "./Messages";
import {AddMessageForm} from "./AddMessageForm";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/reduxStore";
import {startMessageListening, stopMessageListening} from "../../redux/chatReducer";

const ChatPage: FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: FC = () => {
        const dispatch = useDispatch<AppDispatch>()

        useEffect( () => {
            dispatch(startMessageListening())
            return () => {
                dispatch(stopMessageListening)
            }
        }, [])

    return (
        <>
            <Messages />
            <AddMessageForm />
        </>
    );
};

export default ChatPage



