import React from 'react';
import { Link } from 'gatsby';
import "./layout.css";

const NavBar = () => {
    
    return(
        <div  className="navBar" >
            <Link to="/">
                Home
            </Link>
        <Link
            to="/about-me"
        >
            About me
        </Link>
        <Link
            to="/about-omlinson"
        >
            About omlinson
        </Link>
        <Link
            to="/fridge-magnets"
        >
        Fridge magnets
        </Link>
        
        </div>
    )
};

export default NavBar;