import {addPostActionCreator, updatePostActionCreator} from "../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux/es/alternate-renderers";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeMessage: (text) => {
            dispatch(updatePostActionCreator(text));
        },
        addMessage: ()=> {
            dispatch(addPostActionCreator());
        }
    }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;

