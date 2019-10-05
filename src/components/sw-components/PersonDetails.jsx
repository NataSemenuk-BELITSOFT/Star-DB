import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import Record from '../Record/Record';
import { SwapiServiceConsumer } from '../sw-context/sw-context';
import WithSwapiService from '../HocHelpers/WithSwapiService';

const PersonDetails = ({itemId, swapiService}) => {
    const { getPersone, getPersonImage } = swapiService;
    return (
        <ItemDetails    
            id = {itemId}
            getData = {getPersone}
            getImageUrl = {getPersonImage}>
            <Record label = 'Gender' field = 'gender'/>
            <Record label = 'Eye Color' field = 'eye_color'/> 
            <Record label = 'Mass' field = 'mass'/>            
        </ItemDetails>
    );
}

export default WithSwapiService(PersonDetails);