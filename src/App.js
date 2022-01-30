import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import './App.css';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={props.state.sideBar}/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs state={props.state.messagesPage}/>}/>
                        <Route path="/profile" element={<Content state={props.state.profilePage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
