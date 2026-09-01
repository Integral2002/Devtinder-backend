const express = require("express");

const authRoutes = express.Router();
const User = require("../model/user.js");
const { isValidUser } = require("../utils/helper.js");
const bcrypt = require("bcrypt");

authRoutes.post("/signup", async (req, res) => {


  try {
    const isUser = isValidUser(req.body);

    const { name, email, mobileNo, profile_url, skills,about } = req.body;

    const inputPassword = req.body?.password;

    const hashPassword = await bcrypt.hash(inputPassword, 10);

    const user = {
      name,
      email,
      phoneNumber: mobileNo,
      password: hashPassword,
    };

    if (profile_url) {
      user.profile_url = profile_url;
    }

    if (
      skills &&
      (!Array.isArray(skills) ||
        skills.length === 0 ||
        !skills.every((skill) => typeof skill === "string"))
    ) {
      throw new Error("Skills must be a non-empty array of strings");
    }

    user.skills = skills;

 if (about !== undefined) {
  if (typeof about !== "string") {
    throw new Error("About must be a string");
  }

  if (about.trim().length === 0) {
    throw new Error("About cannot be empty");
  }

  if (about.length > 500) {
    throw new Error("About cannot exceed 500 characters");
  }

  user.about = about.trim();
}

    const response = await User.create(user);

    res.send("User saved successfully");
  } catch (error) {
    res.status(400).send("Error : " + error.message + " " + error.code);
  }
});

authRoutes.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Invalid Credential");
    }
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("Invalid Credential");
    }
    const InputPassword = password;
    const IsAuthenticatedUser = await user.isCorrectPassword(InputPassword);

    if (IsAuthenticatedUser) {
      const token = user.getJwt();

const userResponse = {
  _id: user._id,
  name: user.name,
  email: user.email,
  phoneNumber: user.phoneNumber,
  profile_url: user.profile_url,
  skills: user.skills,
};

      res
        .cookie("token", token, {
          maxAge: 24 * 60 * 60 * 1000,
          httpOnly: true,
        }).status(200)
        .send(userResponse);
    } else throw new Error("Invalid Credential");
  } catch (error) {
    res.status(400).send("Error :" + error.message);
  }
});



authRoutes.post("/logout",async(req,res)=>{

try {
    
res.cookie("token",null,{expires:new Date(Date.now()),httpOnly: true}).status(200).send("Logout Successfull")


} catch (error) {

    res.status(400).send("Error in Logout "+error.message)
    
}





})

module.exports = authRoutes;
