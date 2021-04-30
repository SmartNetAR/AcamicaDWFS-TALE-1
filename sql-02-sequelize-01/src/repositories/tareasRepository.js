const sequelize = require("../database/connection");

exports.findAll = async () => {
    const tareas = await sequelize.query("SELECT * FROM tareas", {type: sequelize.QueryTypes.SELECT })
    return tareas;
}

exports.getById = async (id) => {
    const tareas = await sequelize.query('SELECT * FROM tareas WHERE id = ?',
        {replacements: [id], type: sequelize.QueryTypes.SELECT}
    );

    return tareas;
}
// type: sequelize.QueryTypes.INSERT

exports.delete = async (id) => {
    try {
        return await sequelize.query('DELETE FROM tareas WHERE id = ?',
            {replacements: [id]}
        )
    } catch (error) {
        console.log(error);
    }
}