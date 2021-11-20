/*
   * Async y Await
*/

let getNombre = async () => {
    return 'Fernando';
};

// console.log(getNombre())

getNombre().then(nombre =>{
    console.log(nombre)
})
.catch(e =>{
    console.log(e)
})