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
        if(action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);

        } else if(action.type === "UPDATE-NEW-POST_TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if(action.type === "ADD-MESSAGE") {
            let newMessage = {
                id: 10,
                message: this._state.dialogsPage.messageValue,
                src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.messageValue = "";
            this._callSubscriber(this._state);

        } else if(action.type === "UPDATE-MESSAGE") {
            this._state.dialogsPage.messageValue = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
};

export default store;

