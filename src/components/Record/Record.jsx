import React from 'react';
import './Record.css';

const Record = ( props ) => {
    const {item, label, field} = props;
    return (
        <li className = 'description__item'>
            <span>{label}</span>
            <span className = 'description__value'>{ item[field] }</span>
        </li>
    );
}
export default Record;