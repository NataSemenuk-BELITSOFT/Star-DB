import React, {Component} from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails'; 
import PersonePage from '../PersonePage/PersonePage';
import './App.css';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

class App extends Component {
    state = {
        hasError: false,
    }
    componentDidCatch() {
        this.setState({
            hasError:true,
        })
    }
    render() {
        const { hasError } = this.state;
        if(hasError) {
            return <ErrorIndicator />
        }
        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <PersonePage />
            </div>
        );
    }
    
}
export default App;