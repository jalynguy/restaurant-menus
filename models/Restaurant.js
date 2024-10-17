const {sequelize, DataTypes, Model} = require('../db');
const { Sequelize } = require('sequelize');

// TODO - create a Restaurant model
class Restaurant extends Model{};
module.exports = {Restaurant};

Restaurant.init({
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        cuisine: DataTypes.STRING
    },
    {
        sequelize: sequelize,
        modelName: 'Restaurant'
    }
);