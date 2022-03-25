'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('employees', {
      fields: ['cities_id'],
      type: 'foreign key',
      name: 'employees_cities_association',
      references: { 
        table: 'cities', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('employees', {
      fields: ['cities_id'],
      type: 'foreign key',
      name: 'employees_cities_association',
      references: { 
        table: 'cities', 
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    })
  }
};
