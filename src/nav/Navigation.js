import React from 'react';
import nav from './Navigation.module.css';

const Navigation = () => {
    return(
        <nav className={nav.navigation}>
            <ul>
                <li className={`${nav.item} ${nav.active}`}><a href="#">Profile</a></li>
                <li className={`${nav.item} `}><a href="#">Messages</a></li>
                <li className={`${nav.item} `}><a href="#">News</a></li>
                <li className={`${nav.item} `}><a href="#">Music</a></li>
                <li className={`${nav.item} `}><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;