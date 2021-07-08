const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class Heros extends Model {}
Hero.init({
    nombre: { type: DataTypes.STRING },
    chatId: { type: DataTypes.NUMBER }
},{
    sequelize, modelName: "Heros"
});

module.exports = Heros;
