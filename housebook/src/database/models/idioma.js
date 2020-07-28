'use strict';
module.exports = (sequelize, DataTypes) => {
  const idioma = sequelize.define('idioma', {
    name: {
      type : DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },  
  },
  {
    timestamps: true
  });
  idioma.associate = function(models) {
    // associations can be defined here
    idioma.hasMany(models.libro,{
     as: "libros",
     foreignKey: "idioma_id"
   });
   idioma.hasMany(models.detalle,{
     as: "detalles",
     foreignKey: "idioma_id"
   })
   
  };
  return idioma;
};