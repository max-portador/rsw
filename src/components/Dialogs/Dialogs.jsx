import React from "react";
import {Form, Field, Formik} from 'formik';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import css from "./Dialogs.module.css";

const AddMessageForm = (props) => {
    const submit = (values, { setSubmitting, setFieldValue }) => {
        props.sendMessage(values.newMessageText)
        setFieldValue("newMessageText", "")
        setSubmitting(false)
    }

    const validate = (values) => {
        let errors = {};
        return errors;
    }

    return <div>
        <Formik  initialValues= {{ newMessageText: "" }}
                 validate={validate}  onSubmit={submit}>
            <Form className={css.messageInput}>
                <div>
                    <Field name="newMessageText" component={"textarea"}
                           placeholder={"Введите ваше сообщение"} type="text" />
                </div>
                <button type="submit">
                    Send message
                </button>
            </Form>
        </Formik>

    </div>
}

const Dialogs = (props) => {

    let dialogItems = props.dialogs.map((d, i) => <DialogItem key={i} name={d.name} id={d.id} /> )
    let messages = props.messages.map((d, i) => <Messages key={i} text={d.message}/> )

    return <div className={css.dialogs}>
        <div className={css.dialogsItems}>
            {dialogItems}
        </div>

        <div className={css.messageArea}>
            <div className={css.messages}>
                {messages}
            </div>
            <AddMessageForm sendMessage={props.sendMessage}/>
        </div>
    </div>
}

export default Dialogs