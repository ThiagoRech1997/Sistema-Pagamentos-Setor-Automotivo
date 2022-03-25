'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('purchases', {
      fields: ['products_id'],
      type: 'foreign key',
      name: 'purchases_products_association',
      references: { 
        table: 'products', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('purchases', {
      fields: ['products_id'],
      type: 'foreign key',
      name: 'purchases_products_association',
      references: { 
        table: 'products', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
