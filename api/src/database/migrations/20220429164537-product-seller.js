'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product_sales', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      sales_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      products_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      unitary_value: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      amount: {
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
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('product_sales');
  }
};
