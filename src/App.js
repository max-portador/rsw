import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={props.state.sideBar}/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer store={props.store}/>}/>
                        <Route path="/profile"
                               element={<Content store={props.store}/>}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
