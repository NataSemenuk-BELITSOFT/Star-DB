import React, { Component } from 'react';
import './PersonePage.css';
import PersonDetails from '../PersonDetails/PersonDetails';
import ItemList from '../ItemList/ItemList';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class PersonePage extends Component {
    state = {
        selectedPerson: 10,
        hasError: false,
    }
    componentDidCatch() {
        this.setState({
            hasError:true,
        })
    }
    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id,
        })
    };
    render(){
        const {hasError } = this.state;
        if(hasError) {
            return <ErrorIndicator />
        }
        return(
            <div>
                <ItemList onItemSelected = {this.onItemSelected}/>
                <PersonDetails personId = {this.state.selectedPerson}/>
            </div>
        );
    }
}
