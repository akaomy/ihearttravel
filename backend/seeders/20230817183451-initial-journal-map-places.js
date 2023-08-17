'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('JournalTodoCards', [{
      JournalTodoCardName: 'Places to visit',
      JournalTodoCardDescription: 'Cafe La Mar, Museum Da Vinci',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      JournalTodoCardName: 'Websites to get museum tickets!',
      JournalTodoCardDescription: 'somethingsomething.gov.fr',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      JournalTodoCardName: 'Stores for shopping',
      JournalTodoCardDescription: 'This place, this place and this place',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('JournalTodoCards', null, {});
  }
};
