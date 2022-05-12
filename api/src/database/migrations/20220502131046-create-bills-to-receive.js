'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('bills-to-receive', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      total_sale: {
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
      seles_id: {
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
    await queryInterface.dropTable('bills-to-receive')
  }
};
