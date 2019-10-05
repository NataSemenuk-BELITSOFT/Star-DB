import React, { Component } from 'react';
import './PersonePage.css';
import ItemDetails from '../ItemDetails/ItemDetails';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import Record from '../Record/Record';
import { PersonList } from '../sw-components/Lists';
import PersonDetails from '../sw-components/PersonDetails';

export default class PersonePage extends Component {
    swapiService= new SwapiService();
    state = {
        selectedPerson: 21,
    }
    
    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id,
        })
    };
    render(){
        return(
            <ErrorBoundry>
                <div className = 'boxItem'>
                    <PersonList onItemSelected = {this.onItemSelected}
                            renderData = {({name, gender}) => `${name} (${gender})`}/>
                    
                    <PersonDetails itemId = {this.state.selectedPerson} />
                </div>
            </ErrorBoundry>
        );
    }
}
