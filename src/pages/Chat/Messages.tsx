import React, {FC} from "react";
import Message from "./Messages/Message";
import css from "./Dialogs.module.css";


export const Messages: FC< {messages: MessageType[]}> = ({messages}) => {


    return (
        <div className={css.messages}>
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
