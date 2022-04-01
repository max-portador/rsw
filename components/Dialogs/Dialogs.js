"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DialogItem_1 = __importDefault(require("./DialogItem/DialogItem"));
const Messages_1 = __importDefault(require("./Messages/Messages"));
const Dialogs_module_css_1 = __importDefault(require("./Dialogs.module.css"));
const Dialogs = (props) => {
    let sendMessage = () => {
        props.sendMessage();
    };
    let changeHandler = (e) => {
        let text = e.target.value;
        props.onMessageBodyChange(text);
    };
    let dialogItems = props.dialogs.map((d, i) => <DialogItem_1.default key={i} name={d.name} id={d.id}/>);
    let messages = props.messages.map((d, i) => <Messages_1.default key={i} text={d.message}/>);
    return <div className={Dialogs_module_css_1.default.dialogs}>
        <div className={Dialogs_module_css_1.default.dialogsItems}>
            {dialogItems}
        </div>

        <div className={Dialogs_module_css_1.default.messageArea}>
            <div className={Dialogs_module_css_1.default.messages}>
                {messages}
            </div>
            <div className={Dialogs_module_css_1.default.messageInput}>
                <textarea value={props.newMessageText} onChange={changeHandler} placeholder="Enter your message"/>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    </div>;
};
exports.default = Dialogs;
