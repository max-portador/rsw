import React, {FC} from "react";
import DialogItem from "./DialogItem/DialogItem";
import css from "./Dialogs.module.css";
import {IDialog} from "../../redux/dialogsReducer/types";

interface DialogsProps {
    dialogs: IDialog[],
    sendMessage: (text: string) => void
}


const Dialogs: FC<DialogsProps> = (props) => {
    let dialogItems = props.dialogs.map((d, i) => <DialogItem key={i} name={d.name} id={d.id} /> )





    return <div className={css.dialogs}>
        <div className={css.dialogsItems}>
            {dialogItems}
        </div>

        <div className={css.messageArea}>


        </div>
    </div>
}

export default Dialogs



