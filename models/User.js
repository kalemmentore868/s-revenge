const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  referral: {
    type: String,
  },
  password: {
    type: String,
  },
  isVerified: {
    type: Boolean,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
