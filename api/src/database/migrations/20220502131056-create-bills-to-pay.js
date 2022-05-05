'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('bills-to-pay', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      due_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      payment_date: {
        type: Sequelize.DATE,
      },
      total_purchase: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      number_installments: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      installment_value: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      purchases_id: {
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
    await queryInterface.dropTable('bills-to-pay')
  }
};
