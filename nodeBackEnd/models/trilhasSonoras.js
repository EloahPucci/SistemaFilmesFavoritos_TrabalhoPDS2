const Sequelize = require('sequelize');
const db = require('../config/database');

const TrilhaSonora = db.define('trilhasonora', {
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeMusica: {
        type: Sequelize.STRING,
        allowNull: false
    },
    artistaInterprete: {
        type: Sequelize.STRING,
        allowNull: false
    },
    filme: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = TrilhaSonora;