const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');
const config = require('../config');

module.exports = db = {};

initialize();

async function initialize() {
    const { database, port, username, password, dialect, host } = config.database;
    const connection = await mysql.createConnection({ host, port, user: username, password });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    const sequelize = new Sequelize(
        database, 
        username,
        password,
        { dialect }
    );

    // Models
    db.User = require('../users/users.model')(sequelize);

    db.Selecao = require('../selecoes/selecoes.model')(sequelize);

    db.Jogador = require('../jogadores/jogadores.model')(sequelize);
    db.Jogador.belongsTo(db.Selecao, { foreignKey: 'selecao' });

    db.Estadio = require('../estadios/estadios.model')(sequelize);

    db.Partida = require('../partidas/partidas.model')(sequelize);
    db.Partida.belongsTo(db.Selecao, { foreignKey: 'sel1' });
    db.Partida.belongsTo(db.Selecao, { foreignKey: 'sel2' });
    db.Partida.belongsTo(db.Estadio, { foreignKey: 'estadio' });

    db.Evento = require('../eventos/eventos.model')(sequelize);
    db.Evento.belongsTo(db.Partida, { foreignKey: 'partida' });
    db.Evento.belongsTo(db.Jogador, { foreignKey: 'jogador' });

    db.Estatistica = require('../estatisticas/estatisticas.model')(sequelize);
    db.Estatistica.belongsTo(db.Partida, { foreignKey: 'partida' });    

    try {
        await sequelize.sync();
    } catch(e) {
        console.log(e);
    }
    
}