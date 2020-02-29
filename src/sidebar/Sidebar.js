import React from 'react';
import './Sidebar.css';
import Navigation from "../nav/Navigation";

const Sidebar = () => {
    return(
        <aside className="sidebar">
            <Navigation/>
        </aside>
    );
};

export default Sidebar;