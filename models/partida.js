import Selecao from './selecao';
import Estadio from './estadio';

const Sequelize = require('sequelize');
const database = require('../config/dbserver');

const Partida = database.define('partida', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primary_key: true,
    },
    golsSel1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    golsSel2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    grupo: {
        type: Sequelize.STRING,
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

Partida.belongsTo(Selecao, { foreignKey: 'sel1' });
Partida.belongsTo(Selecao, { foreignKey: 'sel2' });
Partida.belongsTo(Estadio, { foreignKey: 'estadio' });

module.exports = Partida;