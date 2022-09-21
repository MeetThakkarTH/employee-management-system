'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employee_leave', {
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
      leave_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'leave',
          key: 'id',
        },
      },
      leave_request_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'employee',
          key: 'id',
        },
      },
      status: {
        type: Sequelize.ENUM('Approved', 'Rejected', 'Pending'),
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
    await queryInterface.dropTable('employee_leave');
  },
};
