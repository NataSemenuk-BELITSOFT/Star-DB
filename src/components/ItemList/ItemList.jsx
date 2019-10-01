import React from 'react';
import './ItemList.css';

const ItemList = (props) => { 
    const { data, onItemSelected, renderData } = props; 
    const items = data.map((item) => {
        const { id } = item;
        const label = renderData(item);
        return(
            <li className = 'itemList__item'
                key = {id}
                onClick = {() => onItemSelected(id)}>
                {label}
            </li>
        );
    });
    return (
        <ul className = 'itemList'>
            {items}
        </ul>
    );
}
export default ItemList;
