import {addPostActionCreator, updatePostActionCreator} from "../../redux/profileReducer";
import {connect} from "react-redux/es/alternate-renderers";
import Friends from "./Friends";


let mapStateToProps = (state) => {
    return {
        friends: state.sidebar
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

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;

