const {sequelize, DataTypes, Model} = require('../db');
const { Sequelize } = require('sequelize');

// TODO - create a Menu model
class Menu extends Model{};

Menu.init({
        title: DataTypes.STRING
    },
    {
        sequelize: sequelize,
        modelName: 'Menus'
    }
)
module.exports = {Menu};