const Sequelize = require("sequelize")
const sequelize = require("./DB.config")

sequelize.authenticate()
    .then(()=> console.log("Database connected successfully"))
    .catch(err =>{
        console.log(err)
    })
module.exports = sequelize.define("users", {
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    username:{
        type: Sequelize.STRING,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        unique: true
    }
    
},{
    timestamps: false,
    underscored: false})

sequelize.sync({force: true})