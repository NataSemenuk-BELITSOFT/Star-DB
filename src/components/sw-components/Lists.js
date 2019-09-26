import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import  WithData from '../HocHelpers/WithData';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets,
} = swapiService;

const PersonList = WithData(ItemList, getAllPeople);
const PlanetList = WithData(ItemList, getAllPlanets);
const StarshipList = WithData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};
