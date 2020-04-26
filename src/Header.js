import React from 'react';
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div className="header">
            <div className="site_name">
                <div className="header_text">
                    Wisdom of the Flock
                </div>
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
