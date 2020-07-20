'use strict';
module.exports = (sequelize, DataTypes) => {
  const libro_categoria = sequelize.define('libro_categoria', { 
    
  },
  {
    timestamps: false
  });
  /*autor.associate = function(models) {
    // associations can be defined here
    autor.hasMany(models.libro,{
     as: "libros",
     foreignKey: "id"
   });
   
  };*/
  return libro_categoria;
};