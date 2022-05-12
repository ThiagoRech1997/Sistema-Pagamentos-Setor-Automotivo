'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('productSales', {
      fields: ['products_id'],
      type: 'foreign key',
      name: 'product_seller_products',
      references: { 
        table: 'products', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('productSales', {
      fields: ['products_id'],
      type: 'foreign key',
      name: 'product_seller_products',
      references: { 
        table: 'products', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
