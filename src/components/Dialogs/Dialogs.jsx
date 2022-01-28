import React from "react";
import css from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) => {
    return <div className={css.dialog}>
        <NavLink to={`/dialogs/${id}`} className={data => data.isActive ? css.active : ""}>{name}</NavLink>
    </div>
}
const Messages = ({text}) => {
    return <div className={css.message}>{text}</div>
}


const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: "Max"}, {id: 2, name: "Alex"},
        {id: 3, name: "Igor"}, {id: 4, name: "Julia"},
    ];
    let messagesData = [
        {message: "Hi"}, {message: "How is your life"},
        {message: "Yo"}, {message: "Yo"},
    ];
    return <div className={css.dialogs}>
        <div className={css.dialogsItems}>
            {dialogs.map(d => {
                return <DialogItem name={d.name} id={d.id}/>
            })}
        </div>
        <div className={css.messages}>
            {
                messagesData.map((d, i) => {
                    return <Messages id={i} text={d.message}/>
                })
            }
        </div>
    </div>
}

export default Dialogs