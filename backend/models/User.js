const { Sequelize, DataTypes } =  require('sequelize');
const sequelize =  new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
    UserId: { type: DataTypes.INTEGER, primaryKey: true, },
    FirstName: { type: DataTypes.STRING, allowNull: false },
    LastName: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.TEXT },
    PhoneNumber: {type: DataTypes.MEDIUMINT.length(15) },
    Password: { type: DataTypes.TEXT, allowNull: false },
    Address: { type: DataTypes.TEXT, allowNull: false },

}, {
    freezeTableName: true
});

module.exports = sequelize._model('User', User) 