'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('detalles', {
      isbn : {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      dimensiones: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fecha_publicacion : {
        type: Sequelize.STRING,
        allowNull: true
      },
      editorial : {
        type: Sequelize.STRING,
        allowNull: true
      },

      //relaciones 1-M
      idioma_id:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      formato_id:{
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('detalles');
  }
};