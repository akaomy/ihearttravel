'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Journals', [{
      journalName: 'East Asia June 2019',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      journalName: 'Paris - Amsterdam January 2019',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      journalName: 'Africa Summer 2022',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      journalName: 'Grandpa\'s Village 2011',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Journals', null, {});
  }
};
