// Model for Actor
const { sequelize } = require('../conexion/conexion')
const { DataTypes } = require('sequelize')

const Actor = sequelize.define(
  'Actor',
  {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
        nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
  },
  {
    tableName: 'Actor',
    timestamps: false,
  }
)

module.exports = { Actor }