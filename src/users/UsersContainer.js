import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsers, unfollowAC} from "../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        user: state.usersPage.users
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);