import React from 'react';

import './RandomPlanet.css';

const RandomPlanet = () => {
    return(
        <div className = 'randomPlanet'>
            <img src = ''></img>
            <p className = 'planetName'>Planet Name</p>
            <ul className = 'descriptionPlanet'>
                <li className = 'description-item'>Population</li>
                <li className = 'description-item'>Rotation Period</li>
                <li className = 'description-item'>Diameter</li>
            </ul>
        </div>
    );
}
export default RandomPlanet;