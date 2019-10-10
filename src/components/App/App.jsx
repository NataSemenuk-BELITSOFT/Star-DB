import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import StarshipPage from '../StarshipPage/StarshipPage';
import PersonDetails from '../sw-components/PersonDetails';
import PlanetDetails from '../sw-components/PlanetDetails';
import StarshipDetails from '../sw-components/StarshipDetails';
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
                        <Switch>
                            <Route path = '/' exact render = {() => <h1>Welcome to StarDB</h1>}/>
                            <Route path = '/people' exact component = {PersonePage}/>
                            <Route path = '/people/:id' render = {({ match }) => {
                                const { id } = match.params;
                                return <PersonDetails itemId = {id}/>
                            }}/>
                            <Route path = '/planets' exact component = {PlanetPage}/>
                            <Route path = '/planets/:id' render = {({ match }) => {
                                const { id } = match.params;
                                return <PlanetDetails itemId = {id}/>
                            }}/>
                            <Route path = '/starships' exact component = {StarshipPage}/>
                            <Route path = '/starships/:id' render = {({ match }) => {
                                const { id } = match.params;
                                return <StarshipDetails itemId = {id}/>
                            }}/>
                            <Redirect to = '/' />
                        </Switch>
                    </div>
                </Router>
            </SwapiServiceProvider>
        );
    }
    
}
export default App;