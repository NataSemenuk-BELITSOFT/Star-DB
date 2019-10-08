import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import Record from '../Record/Record';
import WithSwapiService from '../HocHelpers/WithSwapiService';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record label = 'Gender' field = 'gender'/>
            <Record label = 'Eye Color' field = 'eye_color'/> 
            <Record label = 'Mass' field = 'mass'/>            
        </ItemDetails>
    );
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPersone,
        getImageUrl: swapiService.getPersonImage
    }
}
export default WithSwapiService(PersonDetails, mapMethodsToProps);