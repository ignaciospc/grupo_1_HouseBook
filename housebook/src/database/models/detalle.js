'use strict';
module.exports = (sequelize, DataTypes) => {
  const detalle = sequelize.define('detalle', {
    isbn: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false      
    },
    dimensiones: DataTypes.STRING,
    fecha_publicacion: DataTypes.STRING,
    editorial: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
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
  return detalle;
};