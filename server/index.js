const express = require("express")
const mongoose = require("mongoose")
const config = require("config")

const app = express()
const start = async () => {
    try {
        mongoose.connect(config.get("dbUrl"))

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {


    }
}

start()