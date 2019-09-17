
class SwapiService {
    _apiBase = 'https://swapi.co/api';
    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Couldn\'t fetch ${this._apiBase}${url}` + `, received ${res.status}`);
        }  
        return await res.json();
    }

    async getAllPeople() {
        const result = await this.getResourse('/people/');
        return result.results;
    };
    getPersone(id) {
        return this.getResourse(`/people/${id}`);
    };

    async getAllPlanets(){
        const result = await this.getResourse('/planets/');
        return result.results;
    };
    getPlanet(id) {
        return this.getResourse(`/planets/${id}`);
    };

    async getAllStarships() {
        const result = await this.getResourse('/starships/');
        return result.results;
    };
    getStarship(id) {
        return this.getResourse(`/starships/${id}`);
    };
}

const swapi = new SwapiService();
swapi.getAllStarships().then((body) => {
    body.forEach(element => {
        console.log(element.name);
    });
    
});
swapi.getStarship(5).then((body) => {
    console.log(body.thenname);
})