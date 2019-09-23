import React, { Component } from 'react';
import './ItemDetails.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner/Spinner'; 
import ItemView from '../ItemView/ItemView';

export default class PersonDetails extends Component {
    swapiService = new SwapiService;
    state = {
        item: {},
        loading: true, 
    }
    constructor() {
        super();
    }
    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if(this.props.Id !== prevProps.Id) {
            this.updateItem();
        }
    }
    updateItem() {
        const { id } = this.props;
        if(!id) {
            return;
        }
        this.swapiService
            .getPersone(id)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                });
            });
    }
    render() {
        const { id } = this.props;
        const { item, loading } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <ItemView item = {item} id = {id} /> : null;
        return (
            <div className = 'personDetails'>
                {spinner}
                {content}
            </div>
        );    
    }    
}
