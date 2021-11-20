let nombre = 'Deadpool';
let real = 'wade Winstson';

// console.log( `${nombre} ${real}` )
// let nombreCompleto = nombre + ' ' + real;
// let nomTemplate = `${nombre} ${real}`;
// console.log(nombreCompleto === nomTemplate);

function getNombre() {
    return `${ nombre } ${ real }`
}

console.log(`El Nombre Completo: ${ getNombre() }`)