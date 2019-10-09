import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
                <Router>
                    <div>
                        <Header/>
                        <RandomPlanet/>
                        <Route path = '/people' component = {PersonePage}/>
                        <Route path = '/planets' component = {PlanetPage}/>
                        <Route path = '/starships' component = {StarshipPage}/>
                    </div>
                </Router>
            </SwapiServiceProvider>
        );
    }
    
}
export default App;