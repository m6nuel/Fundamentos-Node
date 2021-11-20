

// function sumar( a, b ) {
//     return a + b;
// }

// const sumar = ( a, b ) => a + b 

// console.log(sumar(10, 20));

// function saludar() {
//     return 'Hola Mundo';
// }
// const saludar = (nombre) => `Hola ${ nombre }`;

// console.log(saludar('jesus'));

let deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());