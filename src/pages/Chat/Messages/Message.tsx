import React, {FC} from "react";
import css from "./Messages.module.css";
import {Col, Divider, Row, Space} from "antd";
import {MessageType} from "../Messages";

const Message:FC<MessageType> = (props) => {
    return <div className={css.message}>
        <Col>
            <Space size={"middle"}>
                <img className={css.img}
                     src={props.photo}
                     alt="MessageIcon"/>
                <span>{props.userName}</span>
            </Space>

        </Col>
        <Divider style={{margin: 5}}/>
        <Row    >
            <span className={css.text}>{props.message}</span>
        </Row>

    </div>
}

export default Message
