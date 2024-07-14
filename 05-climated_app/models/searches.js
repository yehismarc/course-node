import axios from 'axios';

class Searches {

    history = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        // TODO: leer db si existe

    }

    async city(location = '') {

        try {

            // Http request
            // console.log('Cuidad:', location);
            const response = await axios.get('https://reqres.in/api/users?page=2');
            console.log(response.data);

            return []; // return the locations

        } catch (error) {
            return [];
        }
    }

}

export {
    Searches
}