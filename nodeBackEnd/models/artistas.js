const Sequelize = require('sequelize');
const db = require('../config/database');

const Artista = db.define('artista', {
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeArtista: {
        type: Sequelize.STRING,
        allowNull: false
    },
    filmes: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Artista;