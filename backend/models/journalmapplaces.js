'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JournalMapPlaces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JournalMapPlaces.init({
    JournalMapPlacesLat: DataTypes.STRING,
    JournalMapPlacesLngt: DataTypes.STRING,
    JournalMapPlacesComment: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    sequelize,
    modelName: 'JournalMapPlaces',
  });
  return JournalMapPlaces;
};