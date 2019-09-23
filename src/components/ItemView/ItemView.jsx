import React from 'react';
import './ItemView.css';

const ItemView = ( {item, id, image, children} ) => {

    const { name } = item;

    return (
        <React.Fragment>
            <img className = 'personeImage' 
                src = { image }
                alt = { name }
                title = { name }></img>
            <div>
                <p className = 'personName'>{ name }</p>
                <ul className = 'descriptionPerson'>
                    {
                        React.Children.map(children, (child) => {
                           return React.cloneElement(child, { item }); 
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    );
}
export default ItemView;