import React, {FC} from "react";
import css from "./Messages.module.css";
import {Col, Divider, Row} from "antd";
import {MessageType} from "../../../redux/chatReducer/types";

const Message:FC<MessageType> = (props) => {
    return <div className={css.message}>
        <Row>
            <Col span={4} style={{alignContent: "center", display: 'grid'}}>
                <img className={css.img}
                     src={props.photo}
                     alt="MessageIcon"/>
            </Col>
            <Col span={20}>
                    <span className={css.userName}>{props.userName}</span>
                <Divider style={{margin: 5}}/>
                <Row >
                    <span className={css.text}>{props.message}</span>
                </Row>
            </Col>
        </Row>


    </div>
}

export default Message
