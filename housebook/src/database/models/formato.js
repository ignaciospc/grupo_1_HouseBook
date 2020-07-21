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
  /*autor.associate = function(models) {
    // associations can be defined here
    autor.hasMany(models.libro,{
     as: "libros",
     foreignKey: "id"
   });
   
  };*/
  return formato;
};