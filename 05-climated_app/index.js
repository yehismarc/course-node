import 'dotenv/config'

import { readInput, inquirerMenu, pause, listLocations } from "./helpers/inquirer.js"
import { Searches } from "./models/searches.js";


const main = async() => {

    const searches = new Searches();
    let opt;

    do {
        // Print menu 
        opt = await inquirerMenu();

        switch (opt) {
            case 1: 
                // Show message
                const location = await readInput('Cuidad: ');

                // Search for location
                const locations = await searches.city(location);

                // Select a location
                const id = await listLocations(locations);
                if(id === '0') continue;

                const selectedLocation = locations.find( l => l.id === id);

                // --- Save DB
                searches.addHistory(selectedLocation.name)

                //console.log({selectedLocation});

                // Weather
                const weather = await searches.climatedLocations(selectedLocation.lat, selectedLocation.lng)

                // Show results
                console.clear();
                console.log('\nInformación de la cuidad\n'.green);
                console.log('Cuidad:', selectedLocation.name.green);
                console.log('Lat:', selectedLocation.lat);
                console.log('Lng:', selectedLocation.lng);
                console.log('Temperatura:', weather.temp);
                console.log('Mínima:', weather.min);
                console.log('Maxima:', weather.max);
                console.log('Como está el clima:', weather.desc.green);
                
            break;
            case 2:
                searches.capitalizedHistory.forEach((location, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${location}`);
                }); 

            break;
        }

        if(opt !== 0) await pause();
        // await pause();

    } while(opt !== 0);
}

main();