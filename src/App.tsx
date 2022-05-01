import React, {FC} from "react";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect, ConnectedProps, Provider} from "react-redux";
import {compose} from "redux";
import {Button, Layout, Menu, MenuProps} from 'antd';
import Link from "antd/lib/typography/Link";
import {NotificationOutlined, PlayCircleOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';

import store, {RootState} from "./redux/reduxStore";
import {getAuthUserData} from "./redux/authReducer";
import {initializeApp} from "./redux/appReducer";
import PreLoader from "./components/common/PreLoader/PreLoader";
import Login from "./components/Login/Login";
import withSuspense from "./hoc/WithSuspense";
import './App.css';
import AppHeader from "./components/Header/AppHeader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersPage = React.lazy(() => import("./components/Users/UserPage"))

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedUsers = withSuspense(UsersPage)

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
                            <Route path='*'
                                   render={() => <div>
                                       404 NOT FOUND
                                       <Button type='primary' >OK</Button>
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