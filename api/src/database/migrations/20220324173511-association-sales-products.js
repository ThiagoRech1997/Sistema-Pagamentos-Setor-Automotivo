'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('sales', {
      fields: ['products_id'],
      type: 'foreign key',
      name: 'sales_products_association',
      references: { 
        table: 'products', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('sales', {
      fields: ['products_id'],
      type: 'foreign key',
      name: 'sales_products_association',
      references: { 
        table: 'products', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
