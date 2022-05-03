import React, {FC, useEffect, useState} from 'react';
import {Messages} from "./Messages";
import {AddMessageForm} from "./AddMessageForm";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/reduxStore";
import {startMessageListening, stopMessageListening} from "../../redux/chatReducer";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ChatPage: FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {status} = useTypedSelector(state => state.chats)
    let [autoScroll, setAutoScroll] = useState(true)

    useEffect(() => {
        dispatch(startMessageListening())
        return () => {
            dispatch(stopMessageListening)
        }
    }, [])

    return (
        <>
            {status === 'error' &&
                <div>
                    Some error occured. Please refresh the page
                </div>
            }
            <Messages setAutoScroll={ setAutoScroll } autoScroll={autoScroll} />
            <AddMessageForm setAutoScroll={ setAutoScroll }/>
        </>
    );
};

export default ChatPage



