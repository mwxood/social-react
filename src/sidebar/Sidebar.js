import React from 'react';
import sidebar from './Sidebar.module.css';
import Navigation from "../nav/Navigation";
import Friends from "./friends/Friends";

const Sidebar = (props) => {

    return(
        <aside className={sidebar.sidebar}>
            <Navigation/>
            <div className={sidebar.friendsHolder}>
                <Friends state={props.state.friends} />
            </div>
        </aside>
    );
};

export default Sidebar;