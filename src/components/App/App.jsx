import React, {Component} from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails'; 
import Spinner from '../Spinner/Spinner';
import './App.css';

class App extends Component {
    state = {
        selectedPerson: 10,
    }
    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id,
        })
    };
    render() {
        console.log('StAtE', this.state.selectedPerson);
        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <ItemList onItemSelected = {this.onItemSelected}/>
                <PersonDetails personId = {this.state.selectedPerson}/>
            </div>
        );
    }
    
}
export default App;