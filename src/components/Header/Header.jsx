import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className = 'header'>
            <Link to = '/' className = 'logo'>Star DB</Link>
            <ul className = 'nav'>
                <li className = 'nav-item'>
                    <Link to = '/people'>People</Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/planets'>Planets</Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/starships'>Starhips</Link>
                </li>
            </ul>
        </div>
    );
}
export default Header;