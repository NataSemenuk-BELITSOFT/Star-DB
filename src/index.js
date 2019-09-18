import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
ReactDOM.render(<App />, document.getElementById('root'));


// const swapi = new SwapiService();
// swapi.getAllStarships().then((body) => {
//     body.forEach(element => {
//         console.log(element.name);
//     });
    
// });
// swapi.getStarship(5).then((body) => {
//     console.log(body.thenname);
// })