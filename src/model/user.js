
const mongoose=require("mongoose")

const { Schema } = mongoose

const userSchema=new Schema({

name:String,
email:String,
phoneNumber:String,
password:String,



})

const User=mongoose.model("user",userSchema)

module.exports=User