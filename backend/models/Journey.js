const { Sequelize, DataTypes, INTEGER } =  require('sequelize');
const sequelize =  new Sequelize('sqlite::memory:');

const Journey = sequelize.define('Journey', {
    JourneyId: { type: DataTypes.INTEGER, primaryKey: true, },
    Departure: { type: DataTypes.INTEGER },
    Destination: { type: DataTypes.INTEGER },
    JourneyDate: { type: DataTypes.DATE, allowNull: false },
    AvailableSeats: { type: DataTypes.INTEGER },
    JourneyStatus: { type: DataTypes.STRING, allowNull: false },
}, {
    freezeTableName: true
});

module.exports = sequelize._model('Journey', Journey); 