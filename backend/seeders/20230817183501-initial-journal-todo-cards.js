'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('JournalMapPlaces', [{
      JournalMapPlacesLat: '48.8571',
      JournalMapPlacesLngt: '2.3629',
      JournalMapPlacesComment: 'Musée Carnavalet',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      JournalMapPlacesLat: '48.5678',
      JournalMapPlacesLngt: '2.1234',
      JournalMapPlacesComment: 'Le Paname Art Café',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      JournalMapPlacesLat: '47.980709',
      JournalMapPlacesLngt: '2.3376',
      JournalMapPlacesComment: 'Louvre Museum',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('JournalMapPlaces', null, {});
  }
};
