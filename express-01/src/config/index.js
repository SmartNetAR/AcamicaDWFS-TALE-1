
require('dotenv').config();

const config = {
    port: process.env.NODE_PORT || 3000,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
}

module.exports = config;