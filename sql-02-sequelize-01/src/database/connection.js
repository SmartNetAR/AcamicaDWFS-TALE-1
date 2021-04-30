const Sequelize = require('sequelize')

const path = 'mariadb://root:secret@localhost:3306/tareas_db';
const sequelize = new Sequelize( path, {operatorAliases: false});


module.exports = sequelize;