import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

const WithData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
        };
    
        componentDidMount() {
            getData()
            .then((data) => {
                this.setState({
                    data,
                });
            });
        }

        render() {
            const {data} = this.state;
            if (!data) {
                return (
                    <ul className = 'itemList'>
                        <Spinner />
                    </ul>      
                );
            }    
            return <View {...this.props} data = {data}/>
        }
    }
}

export default WithData;
