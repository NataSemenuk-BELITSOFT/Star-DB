import React, { Component } from 'react';
import './ItemDetails.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner/Spinner'; 
import ItemView from '../ItemView/ItemView';

export default class ItemDetails extends Component {
    swapiService = new SwapiService;
    state = {
        item: {},
        loading: true, 
        image: null,
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
        const { id, getData, getImageUrl } = this.props;  
        if(!id) {
            return;
        }
            getData(id)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                    image: getImageUrl(id),
                });
            });
    }
    render() {
        const { id } = this.props;
        const { item, loading, image } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <ItemView item = {item} 
                                            id = {id} 
                                            image = {image}    
                                            children = {this.props.children}/> : null;
        return (
            <div className = 'personDetails'>
                {spinner}
                {content}
            </div>
        );    
    }    
}
