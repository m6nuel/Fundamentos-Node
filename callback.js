// setTimeout( () => {
//     console.log('Hola Mundo');
// }, 3000 )

let getUsuarioById = (id , callback) => {

    let usuario = {
        nombre: 'Jesus',
        id
    }
    if ( id === 20 ) {
        callback(`El Usuario con id: ${20}, No Existe`)
    } else {
        callback( null, usuario );        
    }}

getUsuarioById(22, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('usuario de base de datos:', usuario)
});