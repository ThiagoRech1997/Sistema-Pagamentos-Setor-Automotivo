'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('productSales', {
      fields: ['sales_id'],
      type: 'foreign key',
      name: 'product_seller_sales',
      references: { 
        table: 'sales', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('productSales', {
      fields: ['sales_id'],
      type: 'foreign key',
      name: 'product_seller_sales',
      references: { 
        table: 'sales', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
