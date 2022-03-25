'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('clients', {
      fields: ['addresses_id'],
      type: 'foreign key',
      name: 'clients_addresses_association',
      references: { 
        table: 'addresses', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('clients', {
      fields: ['addresses_id'],
      type: 'foreign key',
      name: 'clients_addresses_association',
      references: { 
        table: 'addresses', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
