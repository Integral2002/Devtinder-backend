const User =require("../model/user.js")
const jwt=require("jsonwebtoken")

const authenticate=async(req,res,next)=>{

try {
    const token=req.cookies.token
    const decodedUser= jwt.verify(token, 'devtinderkey');

     const user= await User.findOne({
       email: decodedUser.email
    })
 
    if(!user){

        throw new Error("User Not Found")
    }


req.user=user;


next();

} catch (error) {

        res.status(401).json({
            message:"Unauthorized"
        });
    
}




}

module.exports=authenticate