'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('sales', {
      fields: ['clients_id'],
      type: 'foreign key',
      name: 'sales_clients_association',
      references: { 
        table: 'clients', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('sales', {
      fields: ['clients_id'],
      type: 'foreign key',
      name: 'sales_clients_association',
      references: { 
        table: 'clients', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
