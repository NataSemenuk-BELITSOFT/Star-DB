import React from 'react';
import './PersonDetails.css';

const PersonDetails = () => {
    return (
        <div className = 'personDetails'>
            <img src = ''></img>
            <p className = 'personName'>Person Name</p>
            <ul className = 'descriptionPerson'>
                <li className = 'description-item'>Population</li>
                <li className = 'description-item'>Rotation Period</li>
                <li className = 'description-item'>Diameter</li>
            </ul>
        </div>
    );
}
export default PersonDetails;