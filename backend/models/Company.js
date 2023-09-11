const { Sequelize, DataTypes, INTEGER } =  require('sequelize');
const sequelize =  new Sequelize('sqlite::memory:');

const Company = sequelize.define('Company', {
    CompanyId: { type: DataTypes.INTEGER, primaryKey: true, },
    Name: { type: DataTypes.TEXT },
    Address: { type: DataTypes.TEXT, allowNull: false },
    PhoneNumber: {type: DataTypes.MEDIUMINT.length(15) },
}, {
    freezeTableName: true
});

module.exports = sequelize._model('Company ', Company); 