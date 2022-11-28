const Sequelize = require('sequelize');
const database = require('../../db/database');

const Archive = database.define('archives', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    key: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = Archive;