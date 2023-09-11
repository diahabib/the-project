const { Sequelize, DataTypes } =  require('sequelize');
const sequelize =  new Sequelize('sqlite::memory:');

const Booking = sequelize.define('Booking', {
    BookingId: { type: DataTypes.INTEGER, primaryKey: true, },
    Date: { type: DataTypes.DATE, allowNull: false },
    Status: { type: DataTypes.STRING, allowNull: false },
}, {
    freezeTableName: true
});

module.exports = sequelize._model('Booking', Booking); 