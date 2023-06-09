import React from "react";
import { Link } from "react-router-dom";
const NavBar = ()=> (
<nav>
    <ul>
        <li>
            <Link className= "nav-item" to ="/">Home</Link>
        </li>
        <li>
            <Link className= "nav-item"to ="/about">About</Link>
        </li>
        <li>
            <Link className= "nav-item" to ="/articles-list-page">Articles</Link>
        </li>

    </ul>
</nav>
);
export default NavBar;