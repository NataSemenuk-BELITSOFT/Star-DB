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
    }
    componentDidMount() {
        this.updatePerson();
    }
    componentDidUpdate(prevProps) {
        if(this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }
    updatePerson() {
        const { personId } = this.props;
        if(!personId) {
            return;
        }
        this.swapiService
            .getPersone(personId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false,
                });
            });
    }
    render() {
        const { personId } = this.props;
        const { person, loading } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PersonView person = {person} personId = {personId} /> : null;
        return (
            <div className = 'personDetails'>
                {spinner}
                {content}
            </div>
        );    
    }    
}

const PersonView = ( {person, personId} ) => {
    const { name, gender, hair_color, mass} = person;
    return (
        <React.Fragment>
            <img className = 'personeImage' 
                src = {`https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`}
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
