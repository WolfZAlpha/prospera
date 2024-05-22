const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  twitterId: { type: String },
  username: { type: String, required: [true, "Please provide a username!"] },
  email: { 
    type: String, 
    required: [true, "Please provide an Email!"], 
    unique: [true, "Email already exists!"] 
  },
  password: { 
    type: String, 
    required: [true, "Please provide a password!"]
  },
  telegram: { type: String, required: [true, "Please provide a Telegram username!"] },
  arbitrumWallet: { type: String, required: [true, "Please provide an Arbitrum wallet address!"] },
  otherWallets: {
    btc: { type: String, default: "" },
    eth: { type: String, default: "" },
    sol: { type: String, default: "" },
    usdt: { type: String, default: "" },
    usdc: { type: String, default: "" }
  },
  isVerified: { type: Boolean, default: false }
});

module.exports = mongoose.model('Users', userSchema);
