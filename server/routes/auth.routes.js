const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Register
router.post('/register', authController.signup);

// Login
router.post('/login', authController.signin);

module.exports = router;
