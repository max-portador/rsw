import React, {FC, useEffect, useRef} from "react";
import Message from "./Messages/Message";
import css from "./Dialogs.module.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";


export const Messages: FC<PropsType> = ({autoScroll, setAutoScroll}) => {

    const messages = useTypedSelector(state => state.chats.messages)

    const mesRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        mesRef?.current?.scrollIntoView()
    };

    useEffect(() => {
        if (autoScroll){
            scrollToBottom()
        }
    }, [messages])

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        let el = e.currentTarget

        if (Math.abs(el.scrollHeight - el.scrollTop) < 400){
            !autoScroll && setAutoScroll(true)
        }
        else {
            autoScroll && setAutoScroll(false)
        }
    }

    return (
        <div className={css.messages} onScroll={scrollHandler}>
            {messages.map((m) =>
                <Message
                    key={m.id}
                    message={m.message}
                    userName={m.userName}
                    photo={m.photo}
                    userId={m.userId}
                />)}
            <div ref={mesRef} />
        </div>
    );
};

type PropsType = {
    autoScroll: boolean,
    setAutoScroll:  React.Dispatch<React.SetStateAction<boolean>>
}