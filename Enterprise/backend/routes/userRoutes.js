const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Create a new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
