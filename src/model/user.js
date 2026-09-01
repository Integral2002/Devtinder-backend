
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const bcrypt = require("bcrypt");

const { Schema } = mongoose

const userSchema=new Schema({

name:{
    type:String,
    required:[true,"Name is Required"]
},
email:{
    type:String,
    required:[true,"Email is required"],
    unique:true,
},
phoneNumber:{
    type:String,
    required:[true,"Phone Number is required"],
    unique:true
},

about:{
type:String,

},
password:String,
skills:[String],
profile_url:{
    type:String,
    default:"https://www.vecteezy.com/free-vector/man-profile-icon"
},



})


userSchema.methods.getJwt=function  (){
const TokenPayload={
    _id:this._id,
name:this.name,
email:this.email,


}
token = jwt.sign(TokenPayload,"devtinderkey",{
    expiresIn:"1D"
})
return token;

}

userSchema.methods.isCorrectPassword= async  function (InputPassword){

    const SavedHash=this.password
const answer=bcrypt.compare(InputPassword,SavedHash)
return answer

}


const User=mongoose.model("user",userSchema)




module.exports=User