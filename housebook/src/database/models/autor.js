'use strict';
module.exports = (sequelize, DataTypes) => {
  const autores = sequelize.define('autor', {
    nombre: DataTypes.STRING
  }, {});
  autores.associate = function(models) {
    // associations can be defined here
  };
  return autores;
};