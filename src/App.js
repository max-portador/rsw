import React from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import './App.css';

const App = () => {
    return <div className='app-wrapper'>
        <Header/>
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
