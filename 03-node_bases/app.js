
// Imprimir la tabla de multiplicar del 5 utilizando un for

//console.clear();
//console.log('=====================');
//console.log('     Tabla de: 5     ');
//console.log('=====================');

//const base = 5;

//for (let i = 1; i <= 10; i++) {
//    console.log(`${base} x ${i} = ${base * i}`);
//}

//const fs = require('node:fs/promises');



// OTHER EXAMPLE (Requerir paquetes)

// console.clear();
// console.log('=====================');
// console.log('     Tabla de: 5     ');
// console.log('=====================');
// 
// const base = 3;
// let salida = '';
// 
// for (let i = 1; i <= 10; i++) {
//     salida += `${base} x ${i} = ${base * i}\n`;
// }
// 
// console.log(salida);
// 
// fs.writeFile(`tabla-${base}.txt`, salida);
// 
// console.log(`tabla-${base}.txt creada`);



// OTHER EXAMPLE (Importar archivos)

// const { crearArchivo } = require('./helpers/multiply')

// console.clear();

// const base = 3;

// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creada'))
//     .catch(err => console.log(err));



// OTHER EXAMPLE (Recibir informacion desde la linea de comando)

// const { crearArchivo } = require('./helpers/multiply');

// console.clear();

// console.log(process.argv);
// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 5] = arg3.split('=');

// console.log(base);

// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creada'))
//     .catch(err => console.log(err));


// OTHER EXAMPLE (Utility Yargs - Recibir informacion desde la linea de comando)

// const { crearArchivo } = require('./helpers/multiply');

// const argv = require('yargs')
//     .option('b', {
//         alias: 'base',
//         type: 'number',
//         demandOption: true
//     })
//     .option('l', {
//         alias: 'listar',
//         type: 'boolean',
//         demandOption: false,
//         default: false
//     })
//     .check((argv, options) => {
//         //console.log('yargs', argv);
//         if(isNaN(argv.b)){
//             throw 'La base tiene que ser un número';
//         }
//         return true;
//     })
//     .argv;


// console.clear();

// crearArchivo(argv.b, argv.l)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creada'))
//     .catch(err => console.log(err));


// OTHER EXAMPLE (Utility Yargs independiente - Recibir informacion desde la linea de comando)

const { crearArchivo } = require('./helpers/multiply');
const colors = require('colors/safe');
const argv = require('./config/yargs');


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(colors.rainbow(nombreArchivo), 'creada'))
    .catch(err => console.log(err));