import React, { Component } from 'react';
import './RandomPlanet.css';
import SwapiService from '../../services/swapi-service';

class RandomPlanet extends Component {
    swapiService = new SwapiService();
    state = {
        planet: {}
    }
    constructor() {
        super();
        this.updatePlanet();
    }
    onPlanetLoad = (planet) => {
        this.setState({planet})
    }
    updatePlanet = () => {
        const id  = Math.floor(Math.random()*25 + 2);
        this.swapiService.getPlanet(id).then(this.onPlanetLoad);
    }
    render () {
        const { planet: { name, population, rotationPeriod, diameter, id }} = this.state;
        return (
            <div className = 'randomPlanet'>
                <img className = 'planetImage' 
                    src = {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    alt = { name }
                    title = { name }></img>
                <div>
                    <p className = 'planetName'>{ name }</p>
                    <ul className = 'descriptionPlanet'>
                        <li className = 'description-item'>
                            <span>Population</span>
                            <span className = 'description-value'>{ population }</span>
                        </li>
                        <li className = 'description-item'>
                            <span>Rotation Period</span>
                            <span className = 'description-value'>{ rotationPeriod }</span>
                        </li>
                        <li className = 'description-item'>
                            <span>Diameter</span>
                            <span className = 'description-value'>{ diameter }</span>
                        </li>
                    </ul>
                </div>
                
            </div>
        );    
    }
}
export default RandomPlanet;