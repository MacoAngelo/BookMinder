const sequelizeFrame = require('sequelize');

const sequelizeConnection = new sequelizeFrame('bookminder', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    sequelizeFrame: sequelizeFrame,
    sequelizeConnection: sequelizeConnection,
}