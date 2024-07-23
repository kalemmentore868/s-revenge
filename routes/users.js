const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { sendEmail, sendEmail2 } = require("../2fa/email");

// Sign up route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, phone, referral, password } = req.body;

    // Validate input
    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields." });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      phone,
      referral,
      password,
    });

    await newUser.save();

    await sendEmail(email, name);

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      res.status(400).json({ message: "Email already exists" });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
});

// Sign up route
router.post("/verify-email", async (req, res) => {
  try {
    const { token } = req.body;

    // Validate input
    if (token != "57809") {
      return res.status(400).json({ message: "Incorrect code" });
    }

    await sendEmail2();

    res.status(201).json({ message: "Profile Verified successfully" });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      res.status(400).json({ message: "Email already exists" });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
});

module.exports = router;
