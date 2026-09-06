const express = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");
const ConnectionRequestModel = require("../model/connectionRequest.js");
const User=require("../model/user.js")

const userRouter = express.Router();

userRouter.get("/user/requests/received", authMiddleware, async (req, res) => {
  try {
    const connections = await ConnectionRequestModel.find({
      toUserId: req.user._id,
      status: "interested",
    }).select("_id").populate([{path:"fromUserId",select:"name email profile_url _id"}]);

    res.status(200).json({ data: connections });
  } catch (error) {
    res.status(401).send("Error " + error.message);
  }
});

userRouter.get("/user/connections", authMiddleware,async (req, res) => {
  try {
    const connections = await ConnectionRequestModel.find({
      $or: [
        { toUserId: req.user._id, status: "accepted" },
        { fromUserId: req.user._id, status: "accepted" },
      ],
    }).select("_id fromUserId toUserId").populate([{path:"fromUserId",select:"name email profile_url _id"},
      {
          path: "toUserId",
          select: "name email profile_url _id",
        },
    ]);

  const result = connections.map((connection) => {
      let user;

      if (
        connection.fromUserId._id.toString() ===
        req.user._id.toString()
      ) {
        user = connection.toUserId;
      } else {
        user = connection.fromUserId;
      }

      return {
        _id: connection._id,
        user: user,
      };
    });



    res.status(200).json({ data: result });
  } catch (error) {
    res.status(401).send("Error " + error.message);
  }
});




userRouter.get("/user/feed",authMiddleware,async(req,res)=>{


//step1: find the connection in which you are in from user or to user
// step 2:build a set so that unique user will come
// step 3: get user from user collection and exclude these users....

try {


 const connectionRequests = await ConnectionRequestModel.find({

        $or:[{toUserId:req.user._id},
            {fromUserId:req.user._id}]
    }).select("toUserId fromUserId");

  const NotAllowedUsersInFeed=new Set()
  
 
  NotAllowedUsersInFeed.add(req.user._id.toString())//add loged in user _id so that if no request or connection of this user then we dont want to show his id in his feed

 connectionRequests.forEach((ele)=>{

   

    NotAllowedUsersInFeed.add(ele.toUserId.toString())
    NotAllowedUsersInFeed.add(ele.fromUserId.toString())
 })


 const NotAllowedUsersInFeedArray=Array.from(NotAllowedUsersInFeed)
const AllowedUsersinFeed= await User.find({
    _id:{$nin:NotAllowedUsersInFeedArray}
}).select(" name _id skills profile_url about")

res.status(200).json({
    data:AllowedUsersinFeed
})
    
} catch (error) {
    res.status(401).send("Error "+error.message)
}





})


module.exports = userRouter;
