'use strict';
module.exports = (sequelize, DataTypes) => {
  const idioma = sequelize.define('idioma', {
    name: DataTypes.STRING,    
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
  return idioma;
};