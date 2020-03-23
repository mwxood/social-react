const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-NEW-POST_TEXT';

const prifileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_POST,newText: text});

export default prifileReducer;