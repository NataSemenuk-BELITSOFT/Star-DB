import React from 'react';
import './ErrorIndicator.css';
import image from './imageError.svg';
const ErrorIndicator = () => {
    return (
        <div className = 'box'>
            <img className = 'imageForError' src = { image } alt = 'Commet'/>
            <div>
                <span>Ooops...</span>
                <span>Something is wrong.</span>
                <span>Don't worry!</span>
                <span>Druids are on the way:)</span>
            </div>
        </div>
    );
}
export default ErrorIndicator;