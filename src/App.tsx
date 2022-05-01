import React, {FC} from "react";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect, ConnectedProps, Provider} from "react-redux";
import {compose} from "redux";
import {Layout, Menu, Breadcrumb, Button, MenuProps, Row, Col, Avatar, Image} from 'antd';
import Link from "antd/lib/typography/Link";
import { UserOutlined, LaptopOutlined, NotificationOutlined, SettingOutlined, PlayCircleOutlined } from '@ant-design/icons';

import store, {RootState} from "./redux/reduxStore";
import {getAuthUserData} from "./redux/authReducer";
import {initializeApp} from "./redux/appReducer";
import PreLoader from "./components/common/PreLoader/PreLoader";
import Login from "./components/Login/Login";
import withSuspense from "./hoc/WithSuspense";
import './App.css';

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersPage = React.lazy(() => import("./components/Users/UserPage"))

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedUsers = withSuspense(UsersPage)

const { Header, Content, Footer, Sider } = Layout;


class App extends React.Component<ConnectorProps> {

    catchAllUnhandledError = (e: PromiseRejectionEvent) => {
        alert(e.reason)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledError)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledError)
    }




    render() {
        const usersLink = <Link href="/users">Users</Link>

        const header_items:MenuProps['items'] = [
            {
                key: `header users`,
                label: (usersLink)
            }
        ]

        const side_items: MenuProps['items'] = [
            {
                key: `sub${1}`,
                icon: React.createElement(UserOutlined),
                label: 'My Profile',
                children: [
                    {
                        key: `opt${1.1}`,
                        label: (<Link href="/profile">Profile</Link>),
                    },
                    {
                        key: `opt${1.2}`,
                        label: (usersLink),
                    },
                ]
            },
            {
                key: `sub${2}`,
                icon: React.createElement(NotificationOutlined),
                label: (<Link href="/news" >News</Link>)
            },
            {
                key: `sub${3}`,
                icon: React.createElement(PlayCircleOutlined ),
                label: (<Link href="/music" >Music</Link>)
            },
            {
                key: `sub${4}`,
                icon: React.createElement(SettingOutlined),
                label: (<Link href="/settings" title='Settings'>Settings</Link>)
            },

        ]

        if (!this.props.initialized) {
            return <PreLoader/>
        }

        // return <div className='app-wrapper'>
        //     <HeaderContainer/>
        //     <NavContainer/>
        //     <div className='app-wrapper-content'>
        //
        //     </div>
        // </div>

        return <Layout>
            <Header className="header">
                <div className="logo" />
                <Row>
                    <Col span={20}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={ header_items } />
                    </Col>
                    <Col span={4} flex={"auto"} >
                        <Row justify={"end"} >
                            <Avatar size={44}
                                    icon={ this.props.profile?.photos?.small
                                        ? <Image src={this.props.profile?.photos?.small}
                                           />
                                        : <UserOutlined />}
                            />
                        </Row>

                    </Col>
                </Row>

            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            items={side_items}
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Switch>
                            <Route exact path={'/'}
                                   render={() => <Redirect to='/profile' />}/>

                            <Route path="/dialogs*"
                                   component={SuspendedDialogs}/>
                            <Route path="/login"
                                   component={Login}/>
                            <Route path="/profile/:userId?"
                                   component={SuspendedProfile}/>
                            <Route path="/users"
                                   component={SuspendedUsers}/>
                            <Route path='*'
                                   render={() => <div>
                                       404 NOT FOUND
                                       <Button type='primary' >OK</Button>
                                   </div>}/>
                        </Switch>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    }

}

const mapStateToProps = (state: RootState) => ({
    initialized: state.app.initialized,
    profile: state.profilePage.profile
})

const connector = connect(mapStateToProps, {getAuthUserData, initializeApp})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connector)(App);

let SamuraiJSApp: FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;

type ConnectorProps = ConnectedProps<typeof connector>