const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        goalsSel1: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        goalsSel2: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        group: { type: DataTypes.CHAR, allowNull: false },
        quarterfinals: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
        semifinals: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
        final: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
        date: { type: DataTypes.DATE, allowNull: false, defaultValue: new Date() }
    };

    const options = {
        defaultScope: {
            attributes: {},
        },
    };

    return sequelize.define('Partida', attributes, options);
}