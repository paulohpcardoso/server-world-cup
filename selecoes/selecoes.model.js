const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
        group: { type: DataTypes.STRING, allowNull: false },
        points: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        goalsPro: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        goalsTaken: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        yellowCards: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        redCards: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        victories: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        draws: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        defeats: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        quarterfinals: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
        semifinals: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
        final: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    };

    const options = {
        defaultScope: {
            attributes: {},
        },
    };

    return sequelize.define('Selecoe', attributes, options);
}