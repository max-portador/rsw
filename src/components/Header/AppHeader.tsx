import React, {FC} from "react";

import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/reduxStore";
import {authLogout} from "../../redux/authReducer";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import {Header} from "antd/lib/layout/layout";
import {UserOutlined} from "@ant-design/icons";
import {Avatar, Button, Col, Image, Menu, MenuProps, Row, Space} from "antd";
import Link from "antd/lib/typography/Link";
import {usersLink} from "../../App";

import css from "./Header.module.css";

const AppHeader: FC = () => {

    const {profile} = useTypedSelector(state => state.profilePage);
    const {isAuth, login} = useTypedSelector(state => state.auth)
    const dispatch = useDispatch<AppDispatch>()

    const changeHandler = async () => {
        dispatch(authLogout())
    }

    const header_items: MenuProps['items'] = [
        {
            key: `header users`,
            label: (usersLink)
        }
    ]

    return <Header className="header">
        <Row>
            <Col span={1}>
                <Image src={"https://img.icons8.com/nolan/50/venn-diagram.png"}/>
            </Col>
            <Col span={19}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={header_items}/>
            </Col>
            <Col span={3}>
                {
                    isAuth
                        ? <Space size={"small"}>
                            <Avatar size={45}
                                    icon={profile?.photos?.small
                                        ? <Image src={profile?.photos?.small}
                                        />
                                        : <UserOutlined/>}
                            />
                            <span className={css.username}>{login}</span>
                            <Button onClick={changeHandler}>Logout</Button>
                        </Space>
                        : <Link href={"/login"} style={{color: "white", float: "right"}}>Login</Link>
                }
            </Col>
        </Row>

    </Header>
}

export default AppHeader;