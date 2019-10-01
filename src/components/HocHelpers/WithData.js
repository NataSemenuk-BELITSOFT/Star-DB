import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

const WithData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
            error: false,
        };
        onListLoad = (data) => {
            this.setState({
                data,
                error: false,
            });
        }
        componentDidMount() {
            getData()
            .then(this.onListLoad)
            .catch(this.onError);
        }
        onError = () => {
            console.log('CATCH ERROR');
            this.setState({
                error: true,
            });
        }
        render() {
            const {data, error} = this.state;
            if(error) {
                return (
                    <ul className = 'itemList'>
                        <ErrorIndicator />
                    </ul>
                );
            }

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
