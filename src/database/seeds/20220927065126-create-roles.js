'use strict';

module.exports = {
  async up(queryInterface) {
    const date = new Date();
    await queryInterface.bulkInsert(
      'roles',
      [
        {
          name: 'CEO',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'Director',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'Manager Engineering',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'Manager Human Resources',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'Team Leader',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'Team Member',
          created_at: date,
          updated_at: date,
        },
        {
          name: 'Employee',
          created_at: date,
          updated_at: date,
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('roles', {
      name: [
        'CEO',
        'Director',
        'Manager Engineering',
        'Team Member',
        'Manager Human Resources',
        'Team Leader',
        'Employee',
      ],
    });
  },
};
