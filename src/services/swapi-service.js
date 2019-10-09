export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
    
    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}, received ${res.status}`);
        }  
        return await res.json();
    }

    getAllPeople = async () => {
        const result = await this.getResourse('/people/');
        return result.results.map(this._transformPerson);
    };
    getPersone = async (id) => {
        const person = await this.getResourse(`/people/${id}`);
        return this._transformPerson(person);
    };

    getAllPlanets = async () =>{
        const result = await this.getResourse('/planets/');
        return result.results.map(this._transformPlanet);
    };
    getPlanet = async (id) => {
        const planet = await this.getResourse(`/planets/${id}`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const result = await this.getResourse('/starships/');
        return result.results.map(this._transformStarship);
    };
    getStarship = async (id) => {
        const starship = await this.getResourse(`/starships/${id}`);
        return this._transformStarship(starship);
    };


    getPersonImage = (id) => {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    }
    getStarshipImage = (id) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    }
    getPlanetImage = (id) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    }
    

    _extractId = ( item ) => {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegExp)[1];
        return id;
    }


    _transformPlanet = (planet) => {
        return {
            id: this._extractId( planet ),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period, 
            diameter: planet.diameter, 
        }
    }
    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            hairColor: person.hair_color,
            mass: person.mass,
        }
    }
    _transformStarship = ( starship ) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacture: starship.manufacture,
            constInCredits: starship.constInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity,
        }
    }
}