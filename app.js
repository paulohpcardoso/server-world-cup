const app = require('./config/server');

(async () => {
    const database = require('./config/dbserver');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();

/* Rotas Públicas*/
 
// Rota para o administrador do site realizar login
app.post('/login');

// Retorna todas as selecoes
app.get('/selecoes');

// Retorna selecao especifica
app.get('/selecao/:id');

// Retorna as estatísticas de determinada partida
app.get('/partida/:id/estatisticas');

// Retorna todas as partidas
app.get('/partidas');

// Retorna uma partida especifica
app.get('/partida/:id');

// Retorna os eventos de determinada partida
app.get('/partida/:id/eventos');

// Retorna todos os estádios
app.get('/estadios');

// Retorna todos os jogadores
app.get('/jogadores');

// Retorna jogadores em ordem de algum atributo
app.get('/jogadores/:type');

// Retorna jogadores daquela selecao
app.get('/jogadores/:selecao');

/* Rotas Privadas */

// Criar selecao
app.post('/selecao');

// Editar Selecao
app.put('/selecao/:id');

// Excluir selecao
app.delete('/selecao/:id');

// Criar partida
app.post('/partida');

// Editar partida/eventos/estatisticas
app.put('/partida/:id');

// Excluir partida
app.delete('/partida/:id');

// Criar estadio
app.post('/estadio');

// Editar estadio
app.put('/estadio/:id');

// Excluir estadio
app.delete('/estadio/:id');

// Criar jogador
app.post('/jogador');

// Editar Jogador
app.put('/jogador/:id');

// Excluir jogador
app.delete('/jogador/:id');