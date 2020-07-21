'use strict';
module.exports = (sequelize, DataTypes) => {
  const autor = sequelize.define('autor', {
    id: {
      type : DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: DataTypes.STRING,
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
  return autor;
};