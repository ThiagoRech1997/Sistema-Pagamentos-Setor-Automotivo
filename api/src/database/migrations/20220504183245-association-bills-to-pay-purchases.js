'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('bills_to_pay', {
      fields: ['purchases_id'],
      type: 'foreign key',
      name: 'bills_to_pay_purchases',
      references: { 
        table: 'purchases', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('bills_to_pay', {
      fields: ['purchases_id'],
      type: 'foreign key',
      name: 'bills_to_pay_purchases',
      references: { 
        table: 'purchases', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
