'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('providers', {
      fields: ['cities_id'],
      type: 'foreign key',
      name: 'providers_cities_association',
      references: { 
        table: 'cities', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('providers', {
      fields: ['cities_id'],
      type: 'foreign key',
      name: 'providers_cities_association',
      references: { 
        table: 'cities', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
