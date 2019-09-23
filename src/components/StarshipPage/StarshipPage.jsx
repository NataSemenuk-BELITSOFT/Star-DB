import React, { Component } from 'react';
import './StarshipPage.css';
import ItemDetails from '../ItemDetails/ItemDetails';
import ItemList from '../ItemList/ItemList';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import Record from '../Record/Record';

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
                    <ItemDetails id = {this.state.selectedStarship}
                                getData = {this.swapiService.getStarship}
                                getImageUrl = {this.swapiService.getStarshipImage}>
                        <Record label = 'Model' field = 'model'/>
                        <Record label = 'Crew' field = 'crew'/>
                        <Record label = 'Manufacturer' field = 'manufacturer'/>
                    </ItemDetails>
                </div>
            </ErrorBoundry>
        );
    }
}
