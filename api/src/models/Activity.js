const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id :{
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    health_score: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
};
