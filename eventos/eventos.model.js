const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        type: { type: DataTypes.STRING, allowNull: false },
        time: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    };

    const options = {
        defaultScope: {
            attributes: {},
        },
    };

    return sequelize.define('Evento', attributes, options);
}