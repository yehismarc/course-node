//const inquirer = require('inquirer');
import inquirer from 'inquirer';

//require('colors');
import colors from 'colors'

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar ciudad`,
                 
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`,
                 
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`,
                 
            }
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log('=============================='.green);
    console.log('    Seleccione una opción'.white);
    console.log('==============================\n'.green);

    const { opcion } = await inquirer.prompt(questions);

    return opcion;

}

const pause = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ]

    console.log('\n');
    await inquirer.prompt(question);

}

const readInput = async(message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0) {
                    return 'Por favor, ingrese un valor';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);

    return desc;

}

const listLocations = async(locations = []) => {

    const choices = locations.map((location, i) => {

        const idx = `${i + 1}.`.green;
        
        return {
            value: location.id,
            name: `${idx} ${location.name}`
            
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    })

    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar:',
            choices

        }
    ];

    const { id } = await inquirer.prompt(question);

    return id;
    
}

export {
    inquirerMenu,
    pause,
    readInput,
    listLocations
}