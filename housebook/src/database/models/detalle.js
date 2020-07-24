'use strict';
module.exports = (sequelize, DataTypes) => {
  const detalle = sequelize.define('detalle', {
    isbn: {
      type: DataTypes.DECIMAL(13,0),
      primaryKey: true,
      allowNull: false      
    },
    dimensiones: DataTypes.STRING,
    fecha_publicacion: DataTypes.STRING,
    editorial: DataTypes.STRING,
    
    idioma_id: DataTypes.STRING,
    formato_id: DataTypes.INTEGER,

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    timestamps: true
  });
  detalle.associate = function(models) {
    // associations can be defined here
    detalle.belongsTo(models.idioma,{
     as: "idiomas",
     foreignKey: "idioma_id"
   });
   detalle.hasMany(models.libro,{
     as: "libro",
     foreignKey: "detalle_isbn"
   })
   detalle.belongsTo(models.formato,{
     as: "formato",
     foreignKey: "formato_id"
   })
   
  };
  return detalle;
};