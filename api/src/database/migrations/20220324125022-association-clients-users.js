'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('clients', {
      fields: ['users_id'],
      type: 'foreign key',
      name: 'clients_users_association',
      references: { 
        table: 'users', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('clients', {
      fields: ['users_id'],
      type: 'foreign key',
      name: 'clients_users_association',
      references: { 
        table: 'users', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
