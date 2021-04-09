const baseEmpleados = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "María" },
    { id: 3, nombre: "Ana" },
];

/**
 * 
 * @param {number} id 
 * @param {function} callback 
 */
const getById = ( id, callback ) =>
{
    const resultado = baseEmpleados.find( ( el ) => el.id === id );
    if (!resultado)
    {
        return callback( "No existe el id "+ id, null );
    }
    setTimeout(() => {
        callback(null, resultado);
    }, 3000);
}


getById(3, function (err, empleado) {
    if (err) return console.log("ERROR !!!", err);
    console.log("El nombre es:", empleado.nombre);
    console.log("fin del programa....");
});
