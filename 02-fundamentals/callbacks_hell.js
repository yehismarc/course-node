
// POSSIBLE CALLBACKS PROBLEMS (CALLBACKS HELL)

const empleados = [
    {
        id: 1,
        nombre: 'Yehismar'
    },
    {
        id: 2,
        nombre: 'Ehismar'
    },
    {
        id: 3,
        nombre: 'Rehiner'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];
 
const getEmpleado = (id, callback) => {
    const empleado = empleados.find( (e) => e.id === id )?.nombre

    if(empleado) {
        callback(null,empleado);
    } else{
        callback(`Empleado con id ${id} no existe`);
    }

}

const getSalario = (id, callback) => {
    const salario = salarios.find( (s) => s.id === id )?.salario

    if(salario) {
        callback(null,salario);
    } else{
        callback(`No existe salario para el empleado con id ${id}`);
    }

}

const id = 3

getEmpleado(id, (err, empleado) => {

    if(err) {
        console.log('ERROR!');
        return console.log(err);
    }

    getSalario(id, (err, salario) => {

        if(err) {
            console.log('ERROR!');
            return console.log(err);
        }
    
        console.log('Salario existe!');
        console.log('El empleado:', empleado, 'tiene el salario de:', salario);
    });
});

//getSalario(id, (err, salario) => {
//
//    if(err) {
//        console.log('ERROR!');
//        return console.log(err);
//    }
//
//    console.log('Salario existe!');
//    console.log(salario.salario);
//});