const {Sequelize} = require('sequelize')
const config = require('../config/db.config')

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect
    }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user.model')(sequelize,Sequelize);
module.exports = db;