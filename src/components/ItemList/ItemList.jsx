import React from 'react';
import './ItemList.css';

const ItemList = () => {
    return (
        <ul className = 'itemList'>
            <li className = 'itemList-item'>
                <a href = '#'>Name 1</a>
            </li>
            <li className = 'itemList-item'>
                <a href = '#'>Name 2</a>
            </li>
            <li className = 'itemList-item'>
                <a href = '#'>Name 3</a>
            </li>
        </ul>
    );
}
export default ItemList;