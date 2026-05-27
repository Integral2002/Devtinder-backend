const express=require("express");

const app=express();

app.use((req,res)=>{

res.send("server is here working")



});

app.listen(5000)
