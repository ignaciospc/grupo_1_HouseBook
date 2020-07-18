'use strict';
module.exports = (sequelize, DataTypes) => {
  const libro = sequelize.define('libro', {
    titulo: DataTypes.STRING,
    createAt: DataTypes.DATE,
    updateAt: DataTypes.DATE
  });
  return libro;
};