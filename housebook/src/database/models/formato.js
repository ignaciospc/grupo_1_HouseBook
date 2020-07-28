'use strict';
module.exports = (sequelize, DataTypes) => {
  const formato = sequelize.define('formato', {
    id: {
      type : DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    format: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    timestamps: true
  });
  formato.associate = function(models) {
    // associations can be defined here
    formato.hasMany(models.detalle,{
     as: "detalles",
     foreignKey: "formato_id"
   });
   
  };
  return formato;
};