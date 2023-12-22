'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Journals', [{
      JournalName: 'Paris - Dakkar',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      JournalName: 'Moscow - China',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      JournalName: 'Tailand',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      JournalName: 'Europe 2022',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Journals', null, {});
  }
};
