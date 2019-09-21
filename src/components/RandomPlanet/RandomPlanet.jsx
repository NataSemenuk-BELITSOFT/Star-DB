import React, { Component } from 'react';
import './RandomPlanet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();
    state = {
        planet: {},
        loading: true,
    }
    componentDidMount(){
        this.updatePlanet();
        // this.interval = setInterval(this.updatePlanet, 3000);
        // clearInterval(this.interval);
    }
    onPlanetLoad = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false,
        });
    };
    updatePlanet = () => {
        const id  = Math.floor(Math.random()*25 + 2);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoad)
            .catch(this.onError);
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        })
    }
    render () {
        const { planet, loading, error } = this.state;
        const errorIndicator = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading && !error ? <PlanetView planet = {planet} /> : null;
        return (
            <div className = 'randomPlanet'>
                {errorIndicator}
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


