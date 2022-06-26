'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('product_purchase', {
      fields: ['products_id'],
      type: 'foreign key',
      name: 'product_purchase_products',
      references: { 
        table: 'purchases', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('product_purchase', {
      fields: ['products_id'],
      type: 'foreign key',
      name: 'product_purchase_products',
      references: { 
        table: 'purchases', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
