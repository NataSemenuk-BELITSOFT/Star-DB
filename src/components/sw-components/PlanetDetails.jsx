import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import Record from '../Record/Record';
import WithSwapiService from '../HocHelpers/WithSwapiService';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record label = 'Population' field = 'population'/>
            <Record label = 'Diameter' field = 'diameter'/>
            <Record label = 'Rotation Period' field = 'rotationPeriod'/>
        </ItemDetails>
    );
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}
export default WithSwapiService(PlanetDetails, mapMethodsToProps);