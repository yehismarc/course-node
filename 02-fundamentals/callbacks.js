
// UTILITY CALLBACKS

// setTimeout( function() {
//     console.log('Hello World')
// }, 1000);

const getUsuarioByID = (id, callback) => {

    const usuario = {
        id, // redundante id: id
        nombre: 'Yehismar'
    }

    setTimeout( () => {
        callback(usuario)
    }, 1500)

}

getUsuarioByID(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});
