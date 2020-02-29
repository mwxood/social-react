import React from "react";
import header from './Header.module.css';

const Header = () => {
    return(
         <header className={header.header}>
             <h1>React Social Network</h1>
        </header>
    );
};

export default Header;