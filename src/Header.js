import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';


function Header() {
    return (
        <div className="header">
            <div className="site_name">
                <Link to="/" className="link">
                    Wisdom of the Flock
                </Link>
            </div>
            <div className="menu">
                <Link to="/about" className="link">
                    About
                </Link>
            </div>
        </div>
    )
}

export default Header;
