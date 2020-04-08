import {addNewMessageActionCreator, updateMessageActionCreator} from "../redux/dialogsReducer";
import DialogItems from "./DialogItems";
import {connect} from "react-redux/es/alternate-renderers";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        newPostText: state.dialogsPage.messageValue,
        messages: state.dialogsPage.messages
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        changeMessage: (text) => {
            dispatch(updateMessageActionCreator(text));
        },
        addMessage: ()=> {
            dispatch(addNewMessageActionCreator());
        }
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItems);

export default DialogsContainer;