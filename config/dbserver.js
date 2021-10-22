/*let mysql = require('mysql');

module.exports = function() {
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'copa_do_mundo',
    });

    connection.connect((err) => {
        if (err) {
            console.log('Error connecting to database...', err)
            return;
        }
        console.log('Connection established');
    });

    return connection;
}*/

const Sequelize = require('sequelize');
const sequelize = new Sequelize('copa_do_mundo', 'root', '12345678', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;