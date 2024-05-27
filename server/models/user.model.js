const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email already exists!"]
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"]
  },
  arbitrumWallet: {
    type: String,
    required: [true, "Please provide an Arbitrum wallet address!"]
  },
  isVerified: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
