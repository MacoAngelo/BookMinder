// Incluir a conexão
const db = require('../config/db');

// Definição da tabela
const Livro = db.sequelizeConnection.define('livros', {
    titulo: {
        type: db.sequelizeFrame.STRING,
    },
    editora: {
        type: db.sequelizeFrame.STRING,
    },
    categoria: {
        type: db.sequelizeFrame.STRING,
    },
    autor: {
        type: db.sequelizeFrame.STRING,
    },
    qtdAutores: {
        type: db.sequelizeFrame.STRING,
    },
    dataLancamento: {
        type: db.sequelizeFrame.INTEGER,
    },
    paginas: {
        type: db.sequelizeFrame.INTEGER,
    },
    classificacao: {
        type: db.sequelizeFrame.INTEGER,
    }
});

module.exports = Livro;
// Livro.sync({force: true});