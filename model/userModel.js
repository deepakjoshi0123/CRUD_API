const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const user = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
    ,
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fullname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zipcode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false
    },
    check:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = user;
