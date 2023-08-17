'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('JournalMapPlaces', [{
      JournalMapPlacesLat: 'Musée Carnavalet',
      JournalMapPlacesLngt: '2.3629',
      JournalMapPlacesComment: '48.8571',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      JournalMapPlacesLat: 'Le Paname Art Café',
      JournalMapPlacesLngt: '2.1234',
      JournalMapPlacesComment: '48.5678',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      JournalMapPlacesLat: 'Louvre Museum',
      JournalMapPlacesLngt: '2.3376',
      JournalMapPlacesComment: '48.8606',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('JournalMapPlaces', null, {});
  }
};
