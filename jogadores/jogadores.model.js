const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        position: { type: DataTypes.STRING, allowNull: false },
        goals: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        assists: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        impediments: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        yellowCards: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        redCards: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        defenses: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        number: { type: DataTypes.INTEGER, allowNull: false },
    };

    const options = {
        defaultScope: {
            attributes: {},
        },
    };

    return sequelize.define('Jogadore', attributes, options);
}