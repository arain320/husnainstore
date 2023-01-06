const express = require("express");
const router = new express.Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//register the user
router.post("/register", async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  console.log(req.body);
  if (!name || !email || !password || !cpassword) {
    res.status(400);
    throw new Error("please fill all the fields");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("password must 6 characters long");
  }

  // Check if user email already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email has already been registered");
  }

  try {
    const userData = new User({
      name: name,
      email: email,
      password: password,
    });
    const finalUser = await userData.save();
      //   Generate Token
      const token = generateToken(finalUser._id);
    if (finalUser) {
      const { _id, name } = finalUser;
      res.status(201).json({
        _id,
        name,
        email,
        token,
      });
    }else{
      res.status(400)
      throw new Error("invalid user data")
    }
  } catch (err) {
    res
      .status(401)
      .json({ status: 401, err, message: "register error in happen" });
  }
});

module.exports = router;
