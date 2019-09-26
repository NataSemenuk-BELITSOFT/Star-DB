import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import Record from '../Record/Record';
import ItemView from '../ItemView/ItemView'
import { withData } from '../HocHelpers/WithData';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const {
    getPersone,
    getStarship,
    getPlanet,
    getPersonImage,
    getStarshipImage,
    getPlanetImage
} = swapiService;

const PersonDetails = ({itemId}) => {
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
const PlanetDetails = ({itemId}) => {
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
const StarshipDetails = ({itemId}) => {
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

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}