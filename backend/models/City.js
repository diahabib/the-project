const { Sequelize, DataTypes } =  require('sequelize');
const sequelize =  new Sequelize('sqlite::memory:');

const User = sequelize.define('City', {
    CityId: { type: DataTypes.INTEGER, primaryKey: true, },
    Name: { type: DataTypes.STRING, allowNull: false },
    Country: { type: DataTypes.STRING, allowNull: false },
    
}, {
    freezeTableName: true
});

module.exports = sequelize._model('User', User) 