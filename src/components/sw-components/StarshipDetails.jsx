import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import Record from '../Record/Record';
import WithSwapiService from '../HocHelpers/WithSwapiService';

const StarshipDetails = ({itemId, swapiService}) => {
    const { getStarship, getStarshipImage } = swapiService;
    return (
        <ItemDetails    
            id = {itemId}
            getData = {getStarship}
            getImageUrl = {getStarshipImage}>
            <Record label = 'Model' field = 'model'/>
            <Record label = 'Crew' field = 'crew'/>
            <Record label = 'Length' field = 'length'/>
        </ItemDetails>
    );
}

export default WithSwapiService(StarshipDetails);