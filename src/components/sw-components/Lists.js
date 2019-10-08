// import React, { Component } from 'react';
// import ItemList from '../ItemList/ItemList';
// import  WithData from '../HocHelpers/WithData';
// import SwapiService from '../../services/swapi-service';

// const swapiService = new SwapiService();

// const {
//     getAllPeople,
//     getAllStarships,
//     getAllPlanets,
// } = swapiService;

// const PersonList = WithData(ItemList, getAllPeople);
// const PlanetList = WithData(ItemList, getAllPlanets);
// const StarshipList = WithData(ItemList, getAllStarships);

// export {
//     PersonList,
//     PlanetList,
//     StarshipList
// };

import React from 'react';
import ItemList from '../ItemList/ItemList';
import  WithData from '../HocHelpers/WithData';
import WithSwapiService from '../HocHelpers/WithSwapiService';

const mapPersonToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople,
    }
}

const mapPlanetToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets,
    }
}

const mapStarshipToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships,
    }
}

const PersonList = WithSwapiService( WithData(ItemList), mapPersonToProps);
const StarshipList = WithSwapiService( WithData(ItemList), mapStarshipToProps);
const PlanetList =  WithSwapiService( WithData(ItemList), mapPlanetToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};

