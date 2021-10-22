const Sequelize = require('sequelize');
const database = require('../config/dbserver');

const Estadio = database.define('estadio', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primary_key: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    capacidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = Estadio;