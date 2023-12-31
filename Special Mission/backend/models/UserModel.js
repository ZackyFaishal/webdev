import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    NIM: DataTypes.STRING,
    kelas: DataTypes.STRING,
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();