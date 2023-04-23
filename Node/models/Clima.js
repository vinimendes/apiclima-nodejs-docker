const Sequelize = require('sequelize');
const db = require('./db');


const Clima = db.define('clima', {
    cdclima: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    temp: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

// Verificacao para identificar se tem alguma diferenca na tabela e realiza a alteracao
Clima.sync({ alter: true })

module.exports = Clima;