const mysql = require("mysql")
const Sequelize = require("sequelize")

module.exports = new Sequelize("usersdb", "root", "123456", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
})