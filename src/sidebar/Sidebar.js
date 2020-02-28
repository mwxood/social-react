import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return(
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;