// Incluir a conexão
const db = require('../config/db');

// Definição da tabela
const Usuario = db.sequelizeConnection.define('usuarios', {
    usuario: {
        type: db.sequelizeFrame.STRING,
    },
    senha: {
        type: db.sequelizeFrame.STRING,
    },
    ativo: {
        type: db.sequelizeFrame.BOOLEAN,
    },
    bloqueado: {
        type: db.sequelizeFrame.BOOLEAN,
    },
    qtdTentativasLogin: {
        type: db.sequelizeFrame.INTEGER,
    }
});

module.exports = Usuario;
//Usuario.sync({force: true});