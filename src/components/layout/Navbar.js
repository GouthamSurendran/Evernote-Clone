import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="green">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">EasyNote</Link>
                <ul id="nav-mobile" className="right">
                    <li><NavLink to="/Favourites">Favourites</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar
