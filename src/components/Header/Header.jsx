import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <div className = 'header'>
            <a className = 'logo'>Star DB</a>
            <ul className = 'nav'>
                <li className = 'nav-item'><a>People</a></li>
                <li className = 'nav-item'><a>Planets</a></li>
                <li className = 'nav-item'><a>Starhips</a></li>
            </ul>
        </div>
    );
}
export default Header;