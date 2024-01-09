import React from 'react';
import { Link } from 'gatsby';
import { useWishlist } from '../context/wishlistContext.js';
import "./layout.css";

const NavWish = () => {

    const { wishlistCount } = useWishlist();

    return(
        <div  className="navWishlist" style={{width:`100%`}}>
        <Link
            to="/favorites"
            style={{textDecoration:`none`}}
        >
        {wishlistCount} 💚
        </Link>
        </div>
    )
};

export default NavWish;