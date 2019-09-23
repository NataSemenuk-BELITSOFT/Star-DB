import React from 'react';
import './ItemView.css';

const ItemView = ( {item, id} ) => {
    //
    const { name, gender, hair_color, mass, model, crew, passengers } = item;
    const image = !model ? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` :
            `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    const param1 = gender ? 'Gender' : 'Model';
    const param2 = hair_color ? 'Hair Color' : 'Crew';
    const param3 = mass ? 'Mass' : 'Passengers';
    //
    return (
        <React.Fragment>
            <img className = 'personeImage' 
                src = { image }
                alt = { name }
                title = { name }></img>
            <div>
                <p className = 'personName'>{ name }</p>
                <ul className = 'descriptionPerson'>
                    <li className = 'description__item'>
                        <span>ID</span>
                        <span className = 'description__value'>{ id }</span>
                    </li>
                    <li className = 'description__item'>
                        <span>{`${param1}`}</span>
                        <span className = 'description__value'>{ gender }{ model }</span>
                    </li>
                    <li className = 'description__item'>
                        <span>{`${param2}`}</span>
                        <span className = 'description__value'>{ hair_color }{ crew }</span>    
                    </li>
                    <li className = 'description__item'>
                        <span>{`${param3}`}</span>
                        <span className = 'description__value'>{ mass }{ passengers }</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}
export default ItemView;