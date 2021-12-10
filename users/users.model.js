const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        username: { type: DataTypes.STRING, allowNull: false },
        pass: { type: DataTypes.STRING, allowNull: false },
    };

    const options = {
        defaultScope: {
            attributes: { exclude: ['pass'] }
        },
        scope: {
            withPass: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}