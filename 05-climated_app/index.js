import { readInput, inquirerMenu, pause } from "./helpers/inquirer.js"
import { Searches } from "./models/searches.js";


const main = async() => {

    const searches = new Searches();
    let opt;

    do {
        // Print menu
        opt = await inquirerMenu();

        switch (opt) {
            case 1: 
                // Mostrar mensaje
                const location = await readInput('Cuidad: ');
                await searches.city(location);

                // Buscar los lugares

                // Selecccionar el lugar
                
                // Clima

                // Mostrar resultados

                console.log('\nInformación de la cuidad\n'.green);
                console.log('Cuidad:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Mínima:', );
                console.log('Maxima:', );
                
                
            break;
            case 2: 
                
                console.log('Esta seleccionando la opcion ' + opt)

            break;
        }

        if(opt !== 0) await pause();
        // await pause();

    } while(opt !== 0);
}

main();