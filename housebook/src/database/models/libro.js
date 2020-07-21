'use strict';
module.exports = (sequelize, DataTypes) => {
  const libro = sequelize.define('libro', {
    id: {
      type : DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    titulo: DataTypes.STRING,
    createAt: DataTypes.DATE,
    updateAt: DataTypes.DATE
  },
  {
    timestamps: true
  });
  libro.associate = function(models) {
    // associations can be defined here
   libro.belongsTo(models.autor,{
     as: "autores",
     foreignKey: "id"
   });
   
  };
  return libro;
};