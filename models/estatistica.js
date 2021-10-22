const Sequelize = require('sequelize');
const database = require('../config/dbserver');

const Estatistica = database.define('estatistica', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primary_key: true,
    },
    chutesSel1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    chutesGolSel1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    posseSel1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    passesSel1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    passesErradosSel1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    faltasSel1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    cartaoAmSel1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    cartaoVeSel1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    impedimentosSel1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    escanteiosSel1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    chutesSel2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    chutesGolSel2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    posseSel2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    passesSel2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    passesErradosSel2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    faltasSel2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    cartaoAmSel2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    cartaoVeSel2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    impedimentosSel2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    escanteiosSel2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = Selecao;