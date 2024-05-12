const Sequelize = require('sequelize');

const sequelize = new Sequelize('practice', 'root', 'Arjun@mysql', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;