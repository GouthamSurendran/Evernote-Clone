import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="green">
            <div class="nav-wrapper">
                <Link to="/" className="brand-logo">EasyNote</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="sass.html">Favourites</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar
