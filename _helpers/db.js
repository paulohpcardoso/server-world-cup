const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');
const config = require('../config');

module.exports = db = {};

initialize();

async function initialize() {
    const { database, port, username, password, dialect, host } = config.database;
    const connection = await mysql.createConnection({ host, port, user: username, password });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    const sequelize = new Sequelize(
        database, 
        username,
        password,
        { dialect }
    );

    db.User = require('../users/users.model')(sequelize);

    await sequelize.sync();
}