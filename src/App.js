import React from "react";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";

import NavContainer from "./components/Nav/NavContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import PreLoader from "./components/common/PreLoader/PreLoader";
import {getAuthUserData} from "./redux/authReducer";
import {initializeApp} from "./redux/appReducer";
import store from "./redux/reduxStore";
import './App.css';
import withSuspense from "./hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))

class App extends React.Component {

    catchAllUnhandledError = (reason, promise) => {
        alert(reason)
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
                           component={withSuspense(DialogsContainer)}/>
                    <Route path="/login"
                           component={Login}/>
                    <Route path="/profile/:userId?"
                           component={withSuspense(ProfileContainer)}/>
                    <Route path="/users"
                           component={withSuspense(UsersContainer)}/>
                    <Route path='*'
                           render={() => <div>404 NOT FOUND</div>}/>
                </Switch>
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {getAuthUserData, initializeApp}))(App);

let SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;