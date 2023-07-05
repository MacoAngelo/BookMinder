const db = require('../config/db');


// Definição da tabela
const Autor = db.sequelizeConnection.define('autores', {
    nome: {
        type: db.sequelizeFrame.STRING,
    },
    origem: {
        type: db.sequelizeFrame.STRING,
    },
    dataNascimento: {
        type: db.sequelizeFrame.INTEGER,
    },
});

module.exports = Autor;
// Autor.sync({force: true});