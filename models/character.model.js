import { DataTypes } from "sequelize";
import {sequelize} from "../config/db.config.js"

export const Character = sequelize.define('Character',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    species:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull:true,
    }
})