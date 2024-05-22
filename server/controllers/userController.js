const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { username, xAccount, telegram, arbitrumWallet, email, password, confirmPassword, btcWallet, ethWallet, solWallet, usdtWallet, usdcWallet } = req.body;

  try {
    console.log('Register request body:', req.body); // Debugging line
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      username,
      xAccount,
      telegram,
      arbitrumWallet,
      email,
      password: hashedPassword,
      otherWallets: {
        btc: btcWallet,
        eth: ethWallet,
        sol: solWallet,
        usdt: usdtWallet,
        usdc: usdcWallet
      }
    });

    await user.save();
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'User Created Successfully', token });
  } catch (err) {
    console.error('Error creating user:', err); // Debugging line
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Login request body:', req.body); // Debugging line
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    console.error('Server error:', err); // Debugging line
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { registerUser, loginUser };
