'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('leave_type', {
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
      name: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('leave_type');
  },
};
