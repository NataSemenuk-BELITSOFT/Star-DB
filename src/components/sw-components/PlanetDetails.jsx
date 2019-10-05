import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import Record from '../Record/Record';
import WithSwapiService from '../HocHelpers/WithSwapiService';

const PlanetDetails = ({itemId, swapiService}) => {
    const {getPlanet, getPlanetImage} = swapiService;
    return (
        <ItemDetails    
            id = {itemId}
            getData = {getPlanet}
            getImageUrl = {getPlanetImage}>
            <Record label = 'Population' field = 'population'/>
            <Record label = 'Diameter' field = 'diameter'/>
            <Record label = 'Rotation Period' field = 'rotationPeriod'/>
        </ItemDetails>
    );
}

export default WithSwapiService(PlanetDetails);