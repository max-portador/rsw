import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";
import App from "./App";
import './index.css';



export const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} funcs={ {addPost, updateNewPostText}} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(state);
subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
