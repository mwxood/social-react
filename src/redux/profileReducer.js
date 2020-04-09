const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-NEW-POST_TEXT';

let initialStateProfile ={
    posts: [
        {id: 1, post: "Hi, how are you?", src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg", likesCount: 12 },
        {id: 2, post: "It's my first post", src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg", likesCount: 18},
    ],
    newPostText: "samurai"
};

const prifileReducer = (state = initialStateProfile, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
                likesCount: 0
            };

            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, newPost]
            };

        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_POST,newText: text});
export default prifileReducer;