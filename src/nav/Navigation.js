import React from 'react';
import nav from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return(
        <nav className={nav.navigation}>
            <ul>
                <li className={`${nav.item}`}><NavLink activeClassName={nav.active} to="/profile">Profile</NavLink></li>
                <li className={`${nav.item} `}><NavLink  activeClassName={nav.active} to="/dialogs">Messages</NavLink></li>
                <li className={`${nav.item} `}><NavLink  activeClassName={nav.active} to="/news">News</NavLink></li>
                <li className={`${nav.item} `}><NavLink  activeClassName={nav.active} to="/music">Music</NavLink></li>
                <li className={`${nav.item} `}><NavLink  activeClassName={nav.active} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;