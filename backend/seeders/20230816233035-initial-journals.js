'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Journal", [{
      JournalName: 'Paris - Dakkar',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    },
    {
      JournalName: 'Moscow - China',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    },
    {
      JournalName: 'Tailand',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    },
    {
      JournalName: 'Europe 2022',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    }
  ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Journal", null, {});
  }
};