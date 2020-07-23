'use strict';
module.exports = (sequelize, DataTypes) => {
  const libro = sequelize.define('libro', {
    titulo: DataTypes.STRING
  }, {});
  libro.associate = function(models) {
    // associations can be defined here
  };
  return libro;
};