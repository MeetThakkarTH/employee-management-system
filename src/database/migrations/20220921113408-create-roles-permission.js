'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roles_permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      permission_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'permissions',
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
    await queryInterface.dropTable('roles_permissions');
  },
};
