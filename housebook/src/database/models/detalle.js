'use strict';
module.exports = (sequelize, DataTypes) => {
  const detalle = sequelize.define('detalle', {
    isbn: DataTypes.INTEGER,
    dimensiones: DataTypes.STRING,
    fecha_publicacion: DataTypes.STRING,
    editorial: DataTypes.STRING,
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
  return detalle;
};