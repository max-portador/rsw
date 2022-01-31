import React from 'react';
import ReactDOM from 'react-dom';
import {addPost, updateNewPostText} from "./state";
import App from "../App";

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} funcs={ {addPost, updateNewPostText}} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
