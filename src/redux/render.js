import React from 'react';
import ReactDOM from 'react-dom';
import {addPost} from "./state";
import App from "../App";

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
