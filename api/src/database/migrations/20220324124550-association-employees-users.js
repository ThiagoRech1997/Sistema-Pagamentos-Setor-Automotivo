'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('employees', {
      fields: ['users_id'],
      type: 'foreign key',
      name: 'employees_users_association',
      references: { 
        table: 'users', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('employees', {
      fields: ['users_id'],
      type: 'foreign key',
      name: 'employees_users_association',
      references: { 
        table: 'users', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
