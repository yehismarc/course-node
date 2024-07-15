import fs from 'fs';

import axios from 'axios';

class Searches {

    history = [];
    dbPath = './db/database.json';

    constructor() {
        this.readDB();
    }

    get capitalizedHistory() {
        return this.history.map(location => {

            let words = location.split(' ');
            words = words.map(p => p[0].toUpperCase() + p.substring(1));

            return words.join(' ')

        });
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        };
    }

    get paramsOpenWeather() {
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es'
        };
    }

    async city(location = '') {

        try {

            // Http request
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json`,
                params: this.paramsMapbox
            });

            const response = await instance.get();



            return response.data.features.map( location => ({
                id: location.id,
                name: location.place_name,
                lng: location.center[0],
                lat: location.center[1]
            }));

        } catch (error) {
            return [];
        }
    }

    async climatedLocations(lat, lon) {

        try {

            // instance axios.create()
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsOpenWeather, lat, lon}
            });

            // response.data
            const response = await instance.get();
            const {weather,main} = response.data;

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp 
            };
        
        } catch (error) {
            console.log(error);
        }
    }

    addHistory(location = '') {

        // TODO: prevent duplicate
        if(this.history.includes(location.toLocaleLowerCase())) {
            return;
        }

        this.history = this.history.splice(0,5);

        this.history.unshift(location.toLocaleLowerCase());

        // Save DB
        this.saveDB();

    }

    saveDB() {

        const payload = {
            history: this.history
        };

        fs.writeFileSync(this.dbPath, JSON.stringify(payload))
    }

    readDB() {

        if(!fs.existsSync(this.dbPath)){
            return null;
        }
    
        const info = fs.readFileSync(this.dbPath, {encoding: 'utf-8'});
        const data = JSON.parse(info)
        //console.log(data);

        this.history = data.history;

    }

}

export {
    Searches
}