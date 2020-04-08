import React from 'react';
import sidebar from './Sidebar.module.css';
import Navigation from "../nav/Navigation";
import FriendsContainer from "./friends/FriendsContainer";

const Sidebar = (props) => {
    return(
        <aside className={sidebar.sidebar}>
            <Navigation />
            <div className={sidebar.friendsHolder}>
                <FriendsContainer  store={props.store} />
            </div>
        </aside>
    );
};

export default Sidebar;