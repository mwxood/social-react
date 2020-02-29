import React from 'react';
import sidebar from './Sidebar.module.css';
import Navigation from "../nav/Navigation";

const Sidebar = () => {
    return(
        <aside className={sidebar.sidebar}>
            <Navigation/>
        </aside>
    );
};

export default Sidebar;