'use strict';

module.exports = {
  async up(queryInterface) {
    const date = new Date();
    await queryInterface.bulkInsert(
      'permissions',
      [
        {
          name: 'CAN_ADD_EMPLOYEE',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_EDIT_EMPLOYEE',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_DELETE_EMPLOYEE',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_VIEW_EMPLOYEE',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_ASSIGN_DESIGNATION',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_UPDATE_DESIGNATION',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_VIEW_DESIGNATION',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_APPLY_LEAVE',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_VIEW_LEAVE',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_EDIT_LEAVE',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_CANCEL_LEAVE',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_UPDATE_LEAVE_STATUS',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_ADD_INVENTORY',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_EDIT_INVENTORY',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_VIEW_INVENTORY',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_DELETE_INVENTORY',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_VIEW_FEEDBACK',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_GIVE_FEEDBACK',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'CAN_REQUEST_FEEDBACK',
          created_at: date,
          updated_at: date,
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('permissions', {
      name: [
        'CAN_UPDATE_LEAVE_STATUS',
        'CAN_CANCEL_LEAVE',
        'CAN_APPLY_LEAVE',
        'CAN_EDIT_LEAVE',
        'CAN_VIEW_LEAVE',
        'CAN_ADD_EMPLOYEE',
        'CAN_EDIT_EMPLOYEE',
        'CAN_DELETE_EMPLOYEE',
        'CAN_VIEW_EMPLOYEE ',
        'CAN_ASSIGN_DESIGNATION',
        'CAN_UPDATE_DESIGNATION',
        'CAN_VIEW_DESIGNATION',
        'CAN_ADD_INVENTORY',
        'CAN_EDIT_INVENTORY',
        'CAN_VIEW_INVENTORY',
        'CAN_DELETE_INVENTORY',
        'CAN_VIEW_FEEDBACK',
        'CAN_GIVE_FEEDBACK',
        'CAN_REQUEST_FEEDBACK',
      ],
    });
  },
};
