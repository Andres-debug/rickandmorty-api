import { Sequelize } from 'sequelize';
import config from '../config/db.config.js';
import UserModel from './user.model.js';

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
db.User = UserModel(sequelize, Sequelize);

export default db;