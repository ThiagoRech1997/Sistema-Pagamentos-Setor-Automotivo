'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('product-sale', {
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
    queryInterface.removeConstraint('product-sale', {
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
