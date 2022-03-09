import React from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {getAuthUserData} from "./redux/jsauthReducer";
import {initializeApp} from "./redux/appReducer";
import './App.css';
import PreLoader from "./components/common/PreLoader/PreLoader";

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

export default  connect(mapStateToProps, {getAuthUserData, initializeApp})(App);
