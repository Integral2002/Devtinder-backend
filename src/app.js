const express=require("express");
const authRoutes=require("./routes/authRoutes.js")
const profileRoutes=require("./routes/profileRoutes.js")
const connectionRoutes=require("./routes/connectionRoutes.js")
const userRouter=require("./routes/userRoutes.js")
const cookieParser = require("cookie-parser");
const cors =require("cors")
const dbConnection = require("./db.js");
const dns = require("dns");
const http = require("http");
const {intializeSocket}=require("./utils/intiliazeSocket.js")
require("dotenv").config();





dns.setServers(["8.8.8.8"]);




const app=express();
const server=http.createServer(app)

intializeSocket(server);



 app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Custom-Header"],
  })
);
app.use(express.json());
app.use(cookieParser());


app.use("/",authRoutes,profileRoutes,connectionRoutes,userRouter)






dbConnection().then(
    ()=>{

server.listen(5000,(req,res)=>{

console.log("server start listening on port 5000")

})

    }
).catch((err)=>{

console.log("something went wrong",err)

})

