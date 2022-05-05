'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('product-purchase', {
      fields: ['purchases_id'],
      type: 'foreign key',
      name: 'product_purchase_purchase',
      references: { 
        table: 'purchases', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('product-purchase', {
      fields: ['purchases_id'],
      type: 'foreign key',
      name: 'product_purchase_purchase',
      references: { 
        table: 'purchases', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
