'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoria = sequelize.define('categoria', {
    id: {
      type : DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    timestamps: true
  });
  categoria.associate = function(models) {
    // associations can be defined here
    categoria.hasMany(models.libro,{
     as: "libros",
     foreignKey: "categoria"
   });
   
  };
  return categoria;
};