const { findAll, getById } = require("../repositories/tareasRepository");

// router.get('/tareas', (req, res) =>{
const execute = async () => {
    const tareas = await findAll();
    console.log('lista de tareas:')
    console.log(tareas)
}
execute();
//     res.json(tareas);
// })

const getTask2 = async () => {
    const [tarea] = await getById(2);
    if (!tarea) {
        console.log({status: 404, msg: "no se encuentra la tarea"})
        return
    }

    console.log('tarea /2');
    console.log(tarea);
}


getTask2();