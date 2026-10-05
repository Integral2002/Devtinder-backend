 
const bcrypt = require("bcrypt");
 const inputPassword="Elon@123"
 async function   hash (){
     const hashPassword = await bcrypt.hash(inputPassword, 10);
     console.log(hashPassword)
  }
 
  hash()