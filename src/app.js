const express=require("express");
const dbConnection = require("./db.js");
const User=require("./model/user.js")

const app=express();

app.use("/hello",async(req,res)=>{


const user={
    name:"aman",
    email:"amanredao950@gmail.com",
    phoneNumber:"1234567891",
    password:"testing this "
}

const response=await User.create(user);
console.log("User saved succesfully :",response)





res.send(response)



});



dbConnection().then(
    ()=>{

app.listen(5000,(req,res)=>{

console.log("server start listening on port 5000")

})

    }
).catch((err)=>{

console.log("something went wrong",err)

})

