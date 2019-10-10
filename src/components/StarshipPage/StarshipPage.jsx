import React from 'react';
import './StarshipPage.css';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import { StarshipList } from '../sw-components/Lists';
import { withRouter } from 'react-router-dom';

const StarshipPage = ({history}) => {
    return(
        <ErrorBoundry>
            <div className = 'boxItem'>
                <StarshipList onItemSelected = {(itemId) => {
                    history.push(`/starships/${itemId}`);
                }}
                renderData = {(item) => `${item.name}`}/>
            </div>
        </ErrorBoundry>
    );
}
export default withRouter(StarshipPage);