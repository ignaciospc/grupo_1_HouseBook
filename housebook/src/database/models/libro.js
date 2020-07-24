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
    descripcion: DataTypes.STRING,
    valoracion: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER,

    autor_id: DataTypes.INTEGER,
    detalle_isbn: DataTypes.DECIMAL(13,0),
    idioma_id: DataTypes.STRING,
    categoria: DataTypes.INTEGER,

    portada: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    timestamps: true
  });
  libro.associate = function(models) {
    // associations can be defined here
  libro.belongsTo(models.idioma,{
      as: "idioma",
      foreignKey: "idioma_id"
    })
   libro.belongsTo(models.autor,{
     as: "autores",
     foreignKey: "autor_id"
   });
   libro.belongsTo(models.categoria,{
     as: "categorias",
     foreignKey: "categoria"
   })
   libro.belongsTo(models.detalle,{
     as: "detalle",
     foreignKey: "detalle_isbn"
   })
   
  };
  return libro;
};