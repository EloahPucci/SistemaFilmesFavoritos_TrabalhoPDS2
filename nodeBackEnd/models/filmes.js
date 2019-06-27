const Sequelize = require('sequelize');
const db = require('../config/database');

const Filme = db.define('filme', {
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeFilme: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    anoLancamento: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Filme;