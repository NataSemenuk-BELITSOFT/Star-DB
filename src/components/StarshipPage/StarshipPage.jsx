import React, { Component } from 'react';
import './StarshipPage.css';
import ItemDetails from '../ItemDetails/ItemDetails';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import Record from '../Record/Record';
import { StarshipList } from '../sw-components/Lists';
import StarshipDetails from '../sw-components/StarshipDetails';

export default class StarshipPage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedStarship: 22,
    }
    onItemSelected = (id) => {
        this.setState({
            selectedStarship: id,
        })
    };
    render(){
        return(
            <ErrorBoundry>
                <div className = 'boxItem'>
                    <StarshipList onItemSelected = {this.onItemSelected}
                            renderData = {(item) => `${item.name}`}/>
                    <StarshipDetails itemId = {this.state.selectedStarship}/>
                </div>
            </ErrorBoundry>
        );
    }
}
