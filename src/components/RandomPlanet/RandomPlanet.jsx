import React, { Component } from 'react';
import './RandomPlanet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner/Spinner';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();
    state = {
        planet: {},
        loading: true,
    }
    constructor() {
        super();
        this.updatePlanet();
    }
    onPlanetLoad = (planet) => {
        this.setState({
            planet,
            loading: false,
        });
    };
    updatePlanet = () => {
        const id  = Math.floor(Math.random()*25 + 2);
        this.swapiService.getPlanet(id).then(this.onPlanetLoad);
    }
    render () {
        const { planet, loading } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PlanetView planet = {planet} /> : null;
        return (
            <div className = 'randomPlanet'>
                {spinner}
                {content}
            </div>
        );    
    }
}

const PlanetView = ( {planet} ) => {
    const { name, population, rotationPeriod, diameter, id } = planet;
    return(
        <React.Fragment>
            <img className = 'planetImage' 
                src = {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt = { name }
                title = { name }></img>
            <div>
                <p className = 'planetName'>{ name }</p>
                <ul className = 'descriptionPlanet'>
                    <li className = 'description__item'>
                        <span>Population</span>
                        <span className = 'description__value'>{ population }</span>
                    </li>
                    <li className = 'description__item'>
                        <span>Rotation Period</span>
                        <span className = 'description__value'>{ rotationPeriod }</span>
                    </li>
                    <li className = 'description__item'>
                        <span>Diameter</span>
                        <span className = 'description__value'>{ diameter }</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}


