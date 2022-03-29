import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";

import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import PreLoader from "./components/common/PreLoader/PreLoader";
import {getAuthUserData} from "./redux/jsauthReducer";
import {initializeApp} from "./redux/appReducer";
import store from "./redux/reduxStore";

import './App.css';

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
                       component={DialogsContainer}/>
                <Route path="/login"
                       component={Login}/>
                <Route path="/profile/:userId?"
                       component={ProfileContainer}/>
                <Route path="/users"
                       component={UsersContainer}/>
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