import React from 'react';
import './PlanetPage.css';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import { PlanetList } from '../sw-components/Lists';
import { withRouter } from 'react-router-dom';

const PlanetPage = ({history}) => {
        return(
            <ErrorBoundry>
                <div className = 'boxItem'>
                    <PlanetList onItemSelected = {(itemId) => {
                        history.push(`/planets/${itemId}`)
                    }}
                            renderData = {({name}) => `${name}` }/>
                </div>
            </ErrorBoundry>
        );
}
export default withRouter(PlanetPage);