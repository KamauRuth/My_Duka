/*
============================
 User Authentication - JWT Based
============================
*/
const express = require("express");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../Models/userModel.js");
const { v4: uuidv4 } = require('uuid');


userRouter.post("/signup", async (req, res) => {
  const { username, email, password} = req.body;
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res
        .status(400)
        .send({ message: "User already exists", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
   
    

    const userId = uuidv4(); // or use custom format like `DUKA-${Date.now()}`

    const newUser = new User({
      userId,
      username,
      email,
      password: hashedPassword, // Make sure to hash password in production
    });

    // const newUser = new User(req.body);
    await newUser.save();
    console.log(userId)
    res
      .status(200)
      .send({ message: "User created successfully", success: true });
  } catch (error) {
    console.warn(error);
    res.status(500).send({ message: "Error creating user", success: false });
  }
});

// userRouter.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
//     res.json({ token, user });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Example route to save cart in backend (pseudo code)
// userRouter.post('/cart', (req, res) => {
//   const { userId, cart } = req.body;

//   // Save cart in database for the user
//   CartModel.findOneAndUpdate(
//     { userId }, 
//     { cart }, 
//     { new: true, upsert: true },
//     (err, savedCart) => {
//       if (err) {
//         return res.status(500).json({ message: 'Error saving cart' });
//       }
//       res.status(200).json(savedCart);
//     }
//   );
// });



userRouter.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res
        .status(400)
        .send({ message: "User already exists", success: false });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;


    // Generate unique userId
    const userId = uuidv4(); // or use custom format like `DUKA-${Date.now()}`

    const newUser = new User({
      userId,
      username,
      email,
      password, // Make sure to hash password in production
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration failed" });
  }
});



module.exports = userRouter;
