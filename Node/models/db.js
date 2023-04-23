const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:passwdtechstorm@postgres:5432/techstorm');

module.exports = sequelize;