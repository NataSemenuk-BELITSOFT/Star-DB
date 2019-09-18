import React from 'react';
import './PersonDetails.css';

const PersonDetails = () => {
    return (
        <div className = 'personDetails'>
            <img src = ''></img>
            <p className = 'personName'>Person Name</p>
            <ul className = 'descriptionPerson'>
                <li className = 'description-item'>
                    <span>Gender</span>
                    <span></span>
                </li>
                <li className = 'description-item'>
                    <span>Birth Year</span>
                    <span></span>    
                </li>
                <li className = 'description-item'>
                    <span>Eye Color</span>
                    <span></span>
                </li>
            </ul>
        </div>
    );
}
export default PersonDetails;