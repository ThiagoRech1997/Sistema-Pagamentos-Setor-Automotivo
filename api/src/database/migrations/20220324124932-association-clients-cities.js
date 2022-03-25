'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('clients', {
      fields: ['cities_id'],
      type: 'foreign key',
      name: 'clients_cities_association',
      references: { 
        table: 'cities', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('clients', {
      fields: ['cities_id'],
      type: 'foreign key',
      name: 'clients_cities_association',
      references: { 
        table: 'cities', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
