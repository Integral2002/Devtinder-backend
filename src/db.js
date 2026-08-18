const mongoose = require("mongoose")
const User=require("./model/user.js")

const mongo_uri = "mongodb+srv://amanrao950:amanrao950@cluster0.dp4ztln.mongodb.net/DevTinder"


const dbConnection = async () => {

    try {
//    await User.init();

        await mongoose.connect(mongo_uri)
        console.log("connection To DB is Succesfull")

    } catch (error) {
        console.log("Error connecting to DB: ", error)
throw error
    }


}

module.exports = dbConnection
