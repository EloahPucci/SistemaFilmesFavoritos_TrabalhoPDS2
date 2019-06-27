const Sequelize = require('sequelize');
let sequelize = new Sequelize('eloah', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 20,
        min: 5,
        acquire: 30000,
        idle: 10000
    },
});

sequelize.sync().then(function() {
    console.log("tabela criada");
    });

module.exports = sequelize;



