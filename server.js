require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_middleware/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/selecoes', require('./selecoes/selecoes.controller'));
app.use('/jogadores', require('./jogadores/jogadores.controller'));
app.use('/estadios', require('./estadios/estadios.controller'));
app.use('/partidas', require('./partidas/partidas.controller'));
app.use('/eventos', require('./eventos/eventos.controller'));
app.use('/estatisticas', require('./estatisticas/estatisticas.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));