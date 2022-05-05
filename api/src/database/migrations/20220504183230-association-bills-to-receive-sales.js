'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('bills-to-receive', {
      fields: ['seles_id'],
      type: 'foreign key',
      name: 'bills_to_receive_sales',
      references: { 
        table: 'sales', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('bills-to-receive', {
      fields: ['seles_id'],
      type: 'foreign key',
      name: 'bills_to_receive_sales',
      references: { 
        table: 'sales', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
