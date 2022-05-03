import React, {FC} from "react";
import css from "./Messages.module.css";
import {Avatar, Col, Divider, Row} from "antd";
import {MessageAPIType} from "../../../redux/chatReducer/types";
import Link from "antd/lib/typography/Link";

const Message: FC<MessageAPIType> = React.memo((props) => {
    const {userId, userName, photo, message} = props;
    const userLink = `/profile/${userId}`;

    return <div className={css.message}>
        <Row>
            <Col span={4} style={{alignContent: "center", display: 'grid'}}>
                <Link href={userLink}>
                    <Avatar
                        className={css.img}
                        src={photo}
                        alt="MessageIcon"/>
                </Link>
            </Col>


            <Col span={20}>
                <Link href={userLink}>
                    <span className={css.userName}>{userName}</span>
                </Link>
                <Divider style={{margin: 5}}/>
                <Row>
                    <span className={css.text}>{message}</span>
                </Row>
            </Col>
        </Row>


    </div>
})

export default Message
