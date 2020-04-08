import Comments from "./Comments";
import {connect} from "react-redux/es/alternate-renderers";


let mapStateToProps = (state) => {

    return {
        posts: state.profilePage
    }
};

const CommentsContainer = connect(mapStateToProps)(Comments);

export default CommentsContainer;

