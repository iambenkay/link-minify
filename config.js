require('dotenv').config()
const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database connection was successful")
    }).catch(error => {
        console.log(error.message)
    })
}