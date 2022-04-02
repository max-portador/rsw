import React from "react";
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";

import NavContainer from "./components/Nav/NavContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import PreLoader from "./components/common/PreLoader/PreLoader";
import {getAuthUserData} from "./redux/jsauthReducer";
import {initializeApp} from "./redux/appReducer";
import store from "./redux/reduxStore";
import './App.css';
import withSuspense from "./hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }


    render() {

        if (!this.props.initialized) {
            return <PreLoader/>
        }

        return <div className='app-wrapper'>
            <HeaderContainer/>
            <NavContainer/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs*"
                       component={withSuspense(DialogsContainer)}/>
                <Route path="/login"
                       component={Login}/>
                <Route path="/profile/:userId?"
                       component={withSuspense(ProfileContainer)}/>
                <Route path="/users"
                       component={withSuspense(UsersContainer)}/>
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
    return <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;