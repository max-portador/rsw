import React from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import './App.css';

const App = () => {
    return <div className='app-wrapper'>
        <Header/>
        <NavContainer/>
        <div className='app-wrapper-content'>
            <Routes>
                <Route path="/dialogs/*"
                       element={<DialogsContainer/>}/>
                <Route path="/profile"
                       element={<Content/>}/>
                <Route path="/users"
                       element={<UsersContainer/>}/>
            </Routes>
        </div>
    </div>
}

export default App;
