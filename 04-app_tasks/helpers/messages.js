//require('colors');
import colors from 'colors'

import readlines from 'readline';

const showMenu = () => {

    return new Promise( resolve => {

        console.clear();
        console.log('=============================='.green);
        console.log('    Seleccione una opción'.green);
        console.log('==============================\n'.green);
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borar tarea`);
        console.log(`${'0.'.green} Salir \n`);
    
        const readline = readlines.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Selecciones una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        });

    });



}

const pause = () => {

    return new Promise( resolve => {

        const readline = readlines.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        });

    })


}

export {
    showMenu,
    pause
}