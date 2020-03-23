const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialStateDailogs = {
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
};

const dialogsReducer = (state = initialStateDailogs, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 10,
                message: state.messageValue,
                src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
            };
            state.messages.push(newMessage);
            state.messageValue = "";
            return state;
        case UPDATE_MESSAGE:
            state.messageValue = action.newMessage;
            return state;
        default:
            return state;
    }
};

export const addNewMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, newMessage: text});

export default dialogsReducer;