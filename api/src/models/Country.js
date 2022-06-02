const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        difficulty: {
            type: DataTypes.ENUM('1', '2','3', '4', '5')
        },
        duration: {
            type: DataTypes.STRING
        },
        season: {
            type: DataTypes.ENUM('summer', 'spring', 'winter', 'autumn')
        }
    })
}