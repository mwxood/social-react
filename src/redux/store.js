import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi, how are you?", src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg", likesCount: 12 },
                {id: 2, post: "It's my first post", src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg", likesCount: 18},
            ],
            newPostText: "samurai"
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: "Mihail" },
                {id: 2, name: "Mihaela" },
                {id: 3, name: "Misho" }
            ],
            messages: [
                {id: 1, message: "Hello", src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" },
                {id: 2, message: "Hi", src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" },
                {id: 3, message: "How are you?", src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" }
            ],
            messageValue: "new message"
        },

        sidebar: {
            friends: [
                {id: 1, name: "Mihail",src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" },
                {id: 2, name: "Mihaela",src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" },
                {id: 3, name: "Misho",src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" }
            ]
        }
    },
    _callSubscriber(){
        console.log("state changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};




export default store;

