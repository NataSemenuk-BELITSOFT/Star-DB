import React from 'react';
import './PersonePage.css';
import { withRouter } from 'react-router-dom';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import { PersonList } from '../sw-components/Lists';

 const PersonePage = ({history}) => {
    return(
        <ErrorBoundry>
            <div className = 'boxItem'>
                <PersonList onItemSelected = {(itemId) => {
                    history.push(`/people/${itemId}`);
                }}
                renderData = {({name, gender}) => `${name} (${gender})`}/>               
            </div>
        </ErrorBoundry>
    );
}
export default withRouter(PersonePage);