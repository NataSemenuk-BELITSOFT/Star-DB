import React, {Component} from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails'; 
import Spinner from '../Spinner/Spinner';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <ItemList/>
                <PersonDetails/>
            </div>
        );
    }
    
}
export default App;