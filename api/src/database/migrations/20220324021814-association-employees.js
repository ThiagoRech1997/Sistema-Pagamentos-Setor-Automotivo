'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('employees', {
      fields: ['addresses_id'],
      type: 'foreign key',
      name: 'employees_addresses_association',
      references: { 
        table: 'addresses', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('employees', {
      fields: ['addresses_id'],
      type: 'foreign key',
      name: 'employees_addresses_association',
      references: { 
        table: 'addresses', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
