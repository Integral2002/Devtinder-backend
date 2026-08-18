const express=require("express");
const authRoutes=require("./routes/authRoutes.js")
const profileRoutes=require("./routes/profileRoutes.js")
const connectionRoutes=require("./routes/connectionRoutes.js")
const userRouter=require("./routes/userRoutes.js")
const cookieParser = require("cookie-parser");

const dbConnection = require("./db.js");
const dns = require("dns");

dns.setServers(["8.8.8.8"]);


const app=express();


app.use(express.json());
app.use(cookieParser());


app.use("/",authRoutes,profileRoutes,connectionRoutes,userRouter)






dbConnection().then(
    ()=>{

app.listen(5000,(req,res)=>{

console.log("server start listening on port 5000")

})

    }
).catch((err)=>{

console.log("something went wrong",err)

})

