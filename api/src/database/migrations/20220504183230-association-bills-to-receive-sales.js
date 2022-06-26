'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('bills_to_receives', {
      fields: ['sales_id'],
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
    queryInterface.removeConstraint('bills_to_receives', {
      fields: ['sales_id'],
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
