const express=require("express")
const User=require("../model/user.js")
const authMiddleware=require("../middleware/authMiddleware.js");
const authRoutes = require("./authRoutes.js");

const profileRoute=express.Router();

profileRoute.get("/profile", authMiddleware,async(req ,res)=>{

try {

    const { password, ...profile } = req.user.toObject();
res.status(200).send(profile)
    
} catch (error) {
    res.status(400).send("Error  : "+error.message)
    
}



})

module.exports=profileRoute