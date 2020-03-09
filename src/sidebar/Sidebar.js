import React from 'react';
import sidebar from './Sidebar.module.css';
import Navigation from "../nav/Navigation";
import Friends from "./friends/Friends";

const Sidebar = (props) => {
    return(
        <aside className={sidebar.sidebar}>
            <Navigation/>
        </aside>
    );
};

export default Sidebar;