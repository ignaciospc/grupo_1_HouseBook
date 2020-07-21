'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('libros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      descripcion : {
        type: Sequelize.STRING,
        allowNull : true,
      },
      valoracion : {
        type: Sequelize.DECIMAL(3,1),
        allowNull : false
      },
      precio : {
        type: Sequelize.DECIMAL(9,2),
        allowNull : false
      },
      descuento : {
        type: Sequelize.DECIMAL(4,2),
        allowNull: true
      },

      //relaciones 1-M
      autor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      detalle_isbn: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      idioma_id: {
        type: Sequelize.STRING,
        allowNull: false
      },

      portada : {
        type: Sequelize.STRING,
        allowNull : false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('libros');
  }
};