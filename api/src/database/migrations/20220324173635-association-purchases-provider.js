'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('purchases', {
      fields: ['providers_id'],
      type: 'foreign key',
      name: 'purchases_providers_association',
      references: { 
        table: 'providers', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('purchases', {
      fields: ['providers_id'],
      type: 'foreign key',
      name: 'purchases_providers_association',
      references: { 
        table: 'providers', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
