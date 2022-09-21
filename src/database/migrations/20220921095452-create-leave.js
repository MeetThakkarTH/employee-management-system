'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('leave', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      leave_type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'leave_type',
          key: 'id',
        },
      },
      reason: {
        type: Sequelize.STRING,
      },
      duration: {
        type: Sequelize.DECIMAL,
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
    await queryInterface.dropTable('leave');
  },
};
