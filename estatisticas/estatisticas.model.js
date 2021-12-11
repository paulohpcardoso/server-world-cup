const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        kicksSel1: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        kicksGoalSel1: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        ballPossessionSel1: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        passesSel1: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        wrongPassesSel1: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        faultsSel1: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        yellowCardsSel1: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        redCardsSel1: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        impedimentsSel1: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        cornersSel1: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        kicksSel2: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        kicksGoalSel2: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        ballPossessionSel2: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        passesSel2: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        wrongPassesSel2: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        faultsSel2: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        yellowCardsSel2: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        redCardsSel2: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        impedimentsSel2: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        cornersSel2: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    };

    const options = {
        defaultScope: {
            attributes: {},
        },
    };

    return sequelize.define('Estatistica', attributes, options);
}