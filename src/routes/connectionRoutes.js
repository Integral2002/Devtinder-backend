const express=require("express")
const authMiddleware=require("../middleware/authMiddleware.js");
const validator = require("validator");
const User=require("../model/user.js")
const ConnectionRequestModel=require("../model/connectionRequest.js");

const connectionRoute=express.Router();

connectionRoute.post("/request/:status/:userId",authMiddleware,async(req,res)=>{
try {
    
      const {status,userId}=req.params;

const AllowedStatus=["interested","ignored"]

if(!AllowedStatus.includes(status)){

throw new Error("Invalid Status")

}

if (!validator.isMongoId(userId)) {
  throw new Error("Invalid user ID");
}


const user= await User.findOne({
    _id:userId
})

if (!user) {
    throw new Error("User not found");
}

if (user._id.toString() === req.user._id.toString()) {
    throw new Error("You cannot send a request to yourself");
}


 await ConnectionRequestModel.create({
fromUserId:req.user._id,
toUserId:userId,
status:status,

})



res.status(200).json({message:`${req.user.name} is ${status} in ${user.name}`})

} catch (error) {

    res.status(401).send("Error : "+ error.message)
    



}

  



})


connectionRoute.post("/request/review/:status/:requestId",authMiddleware,async(req,res,next)=>{

    try {
        
        const {status,requestId}=req.params

const AllowedStatus=["rejected", "accepted"]


if(!AllowedStatus.includes(status)){

throw new Error("Invalid Status")

}

if (!validator.isMongoId(requestId)) {
  throw new Error("Invalid user ID");
}


const connection= await ConnectionRequestModel.findOneAndUpdate({

    _id:requestId,
    toUserId:req.user._id,
    status:"interested"
},
{
    status
},
{
    new:true
})


if(!connection){
throw new Error("Invalid Request ")
}






res.status(200).send(`You ${status} the request`)

    } catch (error) {
      res.status(401).send("Error : "+ error.message)  
    }

    


})






module.exports=connectionRoute