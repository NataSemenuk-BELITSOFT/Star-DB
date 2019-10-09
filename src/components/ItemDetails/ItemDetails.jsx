import React, { Component } from 'react';
import './ItemDetails.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner/Spinner'; 
import ItemView from '../ItemView/ItemView';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class ItemDetails extends Component {
    
    swapiService = new SwapiService();
    state = {
        item: {},
        loading: true, 
        image: null,
    }
    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }
    onItemLoad = (item) => {
        const { itemId, getImageUrl } = this.props;  
        this.setState({
            item,
            loading: false,
            error: false,
            image: getImageUrl(itemId),
        });
    }
    updateItem = () => {
        const { itemId, getData } = this.props;  
        if(!itemId) {
            return;
        }
            getData(itemId)
            .then(this.onItemLoad)
            .catch(this.onError);

    }
    onError = () => {
        this.setState({
            error: true,
            loading: false,
        })
    }
    render() {
        const { itemId } = this.props;
        const { item, loading, image, error } = this.state;
        const errorIndicator = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading && !error ? <ItemView item = {item} 
                                            id = {itemId} 
                                            image = {image}    
                                            children = {this.props.children}/> : null;
        return (
            <div className = 'itemDetails'>
                {errorIndicator}
                {spinner}
                {content}
            </div>
        );    
    }    
}
