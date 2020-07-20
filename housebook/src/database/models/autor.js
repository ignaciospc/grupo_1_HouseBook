'use strict';
module.exports = (sequelize, DataTypes) => {
  const autor = sequelize.define('autor', {
    name: DataTypes.STRING,
    createAt: DataTypes.DATE,
    updateAt: DataTypes.DATE
  },
  {
    timestamps: true
  });
  /*autor.associate = function(models) {
    // associations can be defined here
    autor.hasMany(models.libro,{
     as: "libros",
     foreignKey: "id"
   });
   
  };*/
  return autor;
};