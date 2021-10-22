import Selecao from './selecao';

const Sequelize = require('sequelize');
const database = require('../config/dbserver');

const Jogador = database.define('jogador', {
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
    posicao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gols: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    assistencias: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    faltas: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    impedimentos: {
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
    defesas: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

Jogador.belongsTo(Selecao, { foreignKey: 'selecao' });

module.exports = Jogador;