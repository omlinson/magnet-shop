import React from 'react';
import { Link } from 'gatsby';
import "./layout.css";

const Logo = ({siteTitle}) => {
    return(

<div className="logo">
<Link
  to="/fridge-magnets"
>
  <button>SHOP NOW</button>
</Link>
</div>

)
};

export default Logo;