let express = require('express');
let app = express();
let port = 3001;

app.use(express.static(__dirname + "/../public"));

app.listen(port, function() {
    console.log('Servidor rodando com express na porta ', port);
});

module.exports = app;