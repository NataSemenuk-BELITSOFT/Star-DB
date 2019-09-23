import React, { Component } from 'react';
import './StarshipPage.css';
import ItemDetails from '../ItemDetails/ItemDetails';
import ItemList from '../ItemList/ItemList';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

export default class StarshipPage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedStarship: 10,
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
                    <ItemList onItemSelected = {this.onItemSelected}
                            getData={this.swapiService.getAllStarships}
                            renderData = {(item) => `${item.name}`}/>
                    <ItemDetails id = {this.state.selectedStarship}/>
                </div>
            </ErrorBoundry>
        );
    }
}
