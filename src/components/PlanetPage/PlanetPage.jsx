import React, { Component } from 'react';
import './PlanetPage.css';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import { PlanetList } from '../sw-components/Lists';
import  PlanetDetails from '../sw-components/PlanetDetails';

export default class PlanetPage extends Component {
    swapiService= new SwapiService();
    state = {
        selectedPlanet: 9,
    }
    
    onItemSelected = (id) => {
        this.setState({
            selectedPlanet: id,
        })
    };
    render(){
        return(
            <ErrorBoundry>
                <div className = 'boxItem'>
                    <PlanetList onItemSelected = {this.onItemSelected}
                            renderData = {({name}) => `${name}`}/>
                    
                    <PlanetDetails itemId = {this.state.selectedPlanet} />
                </div>
            </ErrorBoundry>
        );
    }
}
