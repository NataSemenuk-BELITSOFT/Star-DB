import React, {Component} from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import StarshipPage from '../StarshipPage/StarshipPage';
import PersonePage from '../PersonePage/PersonePage';
import PlanetPage from '../PlanetPage/PlanetPage';
import './App.css';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import { SwapiServiceProvider } from '../sw-context/sw-context';
import SwapiService from '../../services/swapi-service'

class App extends Component {
    swapiService = new SwapiService();
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
            <SwapiServiceProvider value = {this.swapiService}>
                <div>
                    <Header/>
                    <RandomPlanet/>
                    <PersonePage />
                    <StarshipPage />
                    <PlanetPage />
                </div>
            </SwapiServiceProvider>
        );
    }
    
}
export default App;