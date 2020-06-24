const Sequelize = require('sequelize');

const sequelize = new Sequelize('boilerplate', 'root', 'netzwelt', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

module.exports = sequelize;
