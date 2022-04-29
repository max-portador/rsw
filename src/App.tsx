import React, {FC} from "react";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect, ConnectedProps, Provider} from "react-redux";
import {compose} from "redux";

import NavContainer from "./components/Nav/NavContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import PreLoader from "./components/common/PreLoader/PreLoader";
import {getAuthUserData} from "./redux/authReducer";
import {initializeApp} from "./redux/appReducer";
import store, {RootState} from "./redux/reduxStore";
import './App.css';
import withSuspense from "./hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersPage = React.lazy(() => import("./components/Users/UserPage"))

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedUsers = withSuspense(UsersPage)

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

        if (!this.props.initialized) {
            return <PreLoader/>
        }

        return <div className='app-wrapper'>
            <HeaderContainer/>
            <NavContainer/>
            <div className='app-wrapper-content'>
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
                           render={() => <div>404 NOT FOUND</div>}/>
                </Switch>
            </div>
        </div>
    }
}

const mapStateToProps = (state: RootState) => ({
    initialized: state.app.initialized,
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