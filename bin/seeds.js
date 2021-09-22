// bin/seeds.js

const mongoose = require("mongoose")

const User = require('./../models/User')

const connectingDB = require("./../config/db")

// ACTIVAMOS VARIABLES DE ENTORNO (.ENV)
require("dotenv").config()

// CONECTARSE A DB
connectingDB()

// ESTE ES EL LISTADO DE DATOS QUE QUEREMOS INSERTAR EN MONGODB

const greatUsers = [ 
    {
        username: "diana"
    },
    {
        username: "andoni"
    },
    {
        username: "erick"
    }
]

const generateUsers = async () => {

    try {
        const dbUsers = await User.create(greatUsers)

        console.log(dbUsers)
        mongoose.connection.close()    

    } catch (error) {
        console.log(`Un error ocurrió en DB: ${error}`)
    }

}

generateUsers()


