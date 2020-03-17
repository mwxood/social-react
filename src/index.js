import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, newMessage, updateMessage, updatePostText} from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter><App state={state} updatePostText={updatePostText} newMessage={newMessage} updateMessage={updateMessage} addPost={addPost}/> </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
