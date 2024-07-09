const fs = require('node:fs/promises');
const colors = require('colors/safe');

//const crearArchivo = (base = 5) => {
//
//    console.log('=====================');
//    console.log('     Tabla de:', base);
//    console.log('=====================');
//
//    let salida = '';
//
//    for (let i = 1; i <= 10; i++) {
//        salida += `${base} x ${i} = ${base * i}\n`;
//    }
//
//    console.log(salida);
//
//    fs.writeFile(`tabla-${base}.txt`, salida);
//
//    console.log(`tabla-${base}.txt creada`);
//}


// UTILITY PLEDGES

// const crearArchivo = (base = 5) => {

//     return new Promise( (resolve, reject) => {

//         console.log('=====================');
//         console.log('     Tabla de:', base);
//         console.log('=====================');
    
//         let salida = '';
    
//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }
    
//         console.log(salida);
    
//         fs.writeFile(`tabla-${base}.txt`, salida);
    
//         resolve(`tabla-${base}.txt creada`);

//     })
// }

// UTILITY ASYC AWAIT

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try{

        if(listar) {
            console.log(colors.green('====================='));
            console.log(colors.green('     Tabla de:'), colors.blue(base));
            console.log(colors.green('====================='));
        }
     
        let salida = '';
        let consola = '';
     
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${colors.green('x')} ${i} ${colors.green('=')} ${base * i}\n`;
        }

        if(listar) {
            console.log(consola);
        }
     
        fs.writeFile(`./salida/tabla-${base}.txt`, salida);
     
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo: crearArchivo
}