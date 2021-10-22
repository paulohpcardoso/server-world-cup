import Partida from './partida';
import Jogador from './jogador';

const Sequelize = require('sequelize');
const database = require('../config/dbserver');

const Evento = database.define('evento', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primary_key: true,
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tempo: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

Evento.belongsTo(Partida, { foreignKey: 'partida' });
Evento.belongsTo(Jogador, { foreignKey: 'jogador' });

module.exports = Evento;