let deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${ this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

// console.log(deadpool.getNombre());

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(`El nombre: ${primerNombre}, El Apellido:  ${ apellido}, El poder: ${poder}`)