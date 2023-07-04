const sequelizeFrame = require('sequelize');

const sequelizeConnection = new sequelizeFrame('bookminder', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    // teste
    sequelizeFrame: sequelizeFrame,
    sequelizeConnection: sequelizeConnection,
}