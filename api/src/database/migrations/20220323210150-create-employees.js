'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('employees', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      addresses_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cities_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      users_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('employees');
  }
};
