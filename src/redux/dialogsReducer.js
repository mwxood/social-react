const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogsReducer = (state, action) => {
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