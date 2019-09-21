import React from 'react';
import './ErrorIndicator.css';
import image from './imageRocket.png';
const ErrorIndicator = () => {
    return (
        <div className = 'box'>
            <img className = 'imageForError' src = { image }/>
            <div>
                <span className = 'glitch'>Boom!</span>
                <span className = ''>Something is wrong</span>
                <span className = ''>Don't worry!</span>
                <span className = ''>Druids are on the way:)</span>
            </div>
        </div>
    );
}
export default ErrorIndicator;