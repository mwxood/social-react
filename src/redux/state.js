let rerenderEntireTree = () => {
    console.log("state changed");
};

let state = {
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
};

export let addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
};

export let updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export let newMessage = () => {
    let newMessage = {
        id: 10,
        message: state.dialogsPage.messageValue,
        src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.messageValue = "";
    rerenderEntireTree(state);
};

export let updateMessage = (messageValue) => {
    state.dialogsPage.messageValue = messageValue;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;

