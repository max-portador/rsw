import React from "react";
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import './App.css';

const App = () => {
    return <div className='app-wrapper'>
        <HeaderContainer/>
        <NavContainer/>
        <div className='app-wrapper-content'>
                <Route path="/dialogs/*"
                       component={DialogsContainer}/>
                <Route path="/profile/:userId?"
                       component={ProfileContainer}/>
                <Route path="/users"
                       component={UsersContainer}/>
        </div>
    </div>
}

export default App;
