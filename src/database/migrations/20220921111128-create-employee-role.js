'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employee_roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      employee_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'employee',
          key: 'id',
        },
      },
      role_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'roles',
          key: 'id',
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('employee_roles');
  },
};
