export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
    
    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}` + `, received ${res.status}`);
        }  
        return await res.json();
    }

    async getAllPeople() {
        const result = await this.getResourse('/people/');
        return result.results.map(this._transformPerson);
    };
    async getPersone(id) {
        const person = await this.getResourse(`/people/${id}`);
        console.log('OOOOOOOOOOOOOOOOOOO', person);
        return person;
    };

    async getAllPlanets(){
        const result = await this.getResourse('/planets/');
        return result.results.map(this._transformPlanet);
    };
    async getPlanet(id) {
        const planet = await this.getResourse(`/planets/${id}`);
        return this._transformPlanet(planet);
    };

    async getAllStarships() {
        const result = await this.getResourse('/starships/');
        return result.results.map(this._transformStarship);
    };
    async getStarship(id) {
        const starship = await this.getResourse(`/starships/${id}`);
        return starship;
    };
    _extractId( item ) {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegExp)[1];
        return id;
    }
    _transformPlanet(planet) {
        return {
            id: this._extractId( planet ),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period, 
            diameter: planet.diameter, 
        }
    }
    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            hairColor: person.hair_color,
            mass: person.mass,
        }
    }
    _transformStarship ( starship ) {
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