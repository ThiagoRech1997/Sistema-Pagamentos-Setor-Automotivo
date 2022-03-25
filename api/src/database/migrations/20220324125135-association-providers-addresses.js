'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('providers', {
      fields: ['addresses_id'],
      type: 'foreign key',
      name: 'providers_addresses_association',
      references: { 
        table: 'addresses', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('providers', {
      fields: ['addresses_id'],
      type: 'foreign key',
      name: 'providers_addresses_association',
      references: { 
        table: 'addresses', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
