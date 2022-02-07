import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let sendMessage = () => {
        let text = state.messagesPage.newMessageText;
        if (text) props.store.dispatch(sendMessageCreator(text))
    }

    let changeHandler = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text));
    }

    return <Dialogs
        onMessageBodyChange={changeHandler}
        sendMessage={sendMessage}
        newMessageText={state.messagesPage.newMessageText}
        dialogs={state.messagesPage.dialogs}
        messages={state.messagesPage.messages}
    />;
}

export default DialogsContainer;