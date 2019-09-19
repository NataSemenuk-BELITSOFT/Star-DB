import React, { Component } from 'react';
import './PersonDetails.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner/Spinner'; 

export default class PersonDetails extends Component {
    swapiService = new SwapiService;
    state = {
        person: {},
        loading: true, 
    }
    constructor() {
        super();
        this.updatePerson();
    }
    onPersonLoad = ( person ) => {
        this.setState({
            person, 
            loading: false,
        });
    }
    updatePerson = () => {
        const id = Math.floor(Math.random()*25 + 2);
        this.swapiService.getPersone(id).then(this.onPersonLoad);
    }
    render() {
        const { person, loading } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PersonView person = {person} /> : null;
        return (
            <div className = 'personDetails'>
                {spinner}
                {content}
            </div>
        );    
    }    
}

const PersonView = ( {person} ) => {
    const { name, gender, hair_color, mass, id } = person;
    return (
        <React.Fragment>
            <img className = 'personeImage' 
                src = {`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                alt = { name }
                title = { name }></img>
            <div>
                <p className = 'personName'>{ name }</p>
                <ul className = 'descriptionPerson'>
                    <li className = 'description__item'>
                        <span>Gender</span>
                        <span className = 'description__value'>{ gender }</span>
                    </li>
                    <li className = 'description__item'>
                        <span>Hair Color</span>
                        <span className = 'description__value'>{ hair_color }</span>    
                    </li>
                    <li className = 'description__item'>
                        <span>Mass</span>
                        <span className = 'description__value'>{ mass }</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}
