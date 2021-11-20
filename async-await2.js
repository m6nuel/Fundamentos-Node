let empleados = [{
    id: 1,
    nombre: 'Jesus',
},{
    id: 2,
    nombre: 'Fernando'
},{
    id: 3,
    nombre:'Juan'
}];

let salarios =[{
    id:1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}];

let getEmpleado = async (id) => {
        
        let empleadoDB = empleados.find( empleado => empleado.id === id)
        
        if (!empleadoDB) {
            throw new Error(`No existe empleado con id: ${id}`)
        } else {
            return empleadoDB;
        }

}


let getSalario = async (empleado) => {

        let salarioDB = salarios.find( salario => salario.id === empleado.id)
        
        if ( !salarioDB ) {
            throw new Error(`No se encontro un salario para el usuario ${ empleado.nombre }`)
        } else {
            return({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
}

let getInfo = async (id) => {
    
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}$`
}

getInfo(1)
    .then(msj=>console.log(msj))
    .catch(e =>console.log(e))