const Sequelize = require('sequelize');
const database = require('../config/dbserver');

const Selecao = database.define('selecao', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primary_key: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    grupo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pontos: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    golsFeitos: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    golsTomados: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    cartaoAm: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    cartaoVe: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    vitorias: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    empates: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    derrotas: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    quartas: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: 0,
    },
    semi: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: 0,
    },
    final: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: 0,
    }
});

module.exports = Selecao;