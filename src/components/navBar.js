import React from 'react';
import { Link } from 'gatsby';
import "./layout.css";

const NavBar = () => {
    
    return(
        <div  className="navBar" >
        <Link
            to="/about"
        >
            About
        </Link>
        <Link
            to="/favorites"
        >
        Fridge Magnets
        </Link>
        </div>
    )
};

export default NavBar;