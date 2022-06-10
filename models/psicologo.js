'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class psicologo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    psicologo.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'psicologo',
    });
    return psicologo;
};