import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let users = [
    {id: 1, name: "Mihail" },
    {id: 2, name: "Mihaela" },
    {id: 3, name: "Misho" }
];

let messages = [
    {id: 1, message: "Hello" },
    {id: 2, message: "Hi" },
    {id: 3, message: "How are you?" }
];
let posts = [
    {id: 1, post: "Hi, how are you?", src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg", likesCount: 12 },
    {id: 2, post: "It's my first post", src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg", likesCount: 18}
];

ReactDOM.render(<App users={users} messages={messages} posts={posts} />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
