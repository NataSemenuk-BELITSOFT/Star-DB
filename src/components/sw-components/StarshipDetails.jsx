import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import Record from '../Record/Record';
import WithSwapiService from '../HocHelpers/WithSwapiService';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record label = 'Model' field = 'model'/>
            <Record label = 'Crew' field = 'crew'/>
            <Record label = 'Length' field = 'length'/>
        </ItemDetails>
    );
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}
export default WithSwapiService(StarshipDetails, mapMethodsToProps);