'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dbfData', {
      id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      leistnr: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      leistung: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      preis: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      kname: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('dbfData');
  },
};
