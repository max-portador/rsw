import React, {FC} from "react";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect, ConnectedProps, Provider} from "react-redux";
import {compose} from "redux";
import {Avatar, Button, Card, Col, Layout, Menu, MenuProps, Skeleton} from 'antd';
import Link from "antd/lib/typography/Link";
import Meta from "antd/es/card/Meta";
import {NotificationOutlined, CustomerServiceOutlined, SettingOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';

import store, {RootState} from "./redux/reduxStore";
import {getAuthUserData} from "./redux/authReducer";
import {initializeApp} from "./redux/appReducer";
import PreLoader from "./components/common/PreLoader/PreLoader";
import Login from "./components/Login/Login";
import AppHeader from "./components/Header/AppHeader";
import withSuspense from "./hoc/WithSuspense";

import {user_icon} from "./redux/usersReducer";
import './App.css';


const DialogsContainer = React.lazy(() => import("./pages/Chat/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersPage = React.lazy(() => import("./components/Users/UserPage"))
const ChatPage = React.lazy(() => import("./pages/Chat/ChatPage"))

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedUsers = withSuspense(UsersPage)
const SuspendedChat = withSuspense(ChatPage)

const { Content, Footer, Sider } = Layout;
export const usersLink = <Link href="/users">Users</Link>

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
        const side_items: MenuProps['items'] = [
            {
                key: `sub_${'profile'}`,
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
                key: `sub_${'chat'}`,
                icon: React.createElement(MessageOutlined ),
                label: (<Link href="/chat" >Chat</Link>)
            },
            {
                key: `sub_${'news'}`,
                icon: React.createElement(NotificationOutlined),
                label: (<Link href="/news" >News</Link>)
            },
            {
                key: `sub_${'music'}`,
                icon: React.createElement(CustomerServiceOutlined ),
                label: (<Link href="/music" >Music</Link>)
            },
            {
                key: `sub_${'settings'}`,
                icon: React.createElement(SettingOutlined),
                label: (<Link href="/settings" title='Settings'>Settings</Link>)
            },

        ]

        if (!this.props.initialized) {
            return <PreLoader/>
        }

        return <Layout>
            <AppHeader/>
            <Content style={{ padding: '0 50px' }}>
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
                            <Route path="/chat"
                                   component={SuspendedChat}/>
                            <Route path='*'
                                   render={() => <div>
                                       404 NOT FOUND
                                       <Card
                                           style={{ width: "50%", marginTop: 16 }}
                                           actions={[
                                               <Button type='primary' >OK</Button>
                                           ]}
                                       >
                                       <Skeleton loading={false} avatar active>
                                           <Meta
                                               avatar={<Avatar src={user_icon} size={70} />}
                                               title= "Card title"
                                               description={
                                               <>
                                                   <Col span={24}>
                                                       <Card.Grid style={{width: "-webkit-max-content"}}>
                                                           This is the description
                                                       </Card.Grid>
                                                   </Col>

                                                   <Card.Grid
                                                       style={{
                                                           width: "-webkit-max-content",
                                                           padding: "0 auto"}}
                                                       hoverable={false}

                                                   >

                                                       This is the description
                                                   </Card.Grid >
                                                   <Card.Grid style={{width: "-webkit-max-content"}}
                                                   >
                                                       Third grid
                                                   </Card.Grid>

                                               </>


                                           }
                                           />

                                       </Skeleton>
                                       </Card>
                                   </div>}/>
                        </Switch>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Samuray Way ©2022 Created by Max Portador</Footer>
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