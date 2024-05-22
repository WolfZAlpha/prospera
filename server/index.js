const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
require('./passportConfig'); // Require passport configuration

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5003;  // Changed fallback port to 5003

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure session middleware
app.use(session({
  secret: process.env.SESSION_SECRET, // Use the strong secret key from .env
  resave: false,
  saveUninitialized: true
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Secure headers with Helmet
app.use(helmet());

// Content Security Policy
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  })
);

// Serve static files with appropriate caching headers
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.mp4') || path.endsWith('.webm')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
    }
  }
}));

// Routes
app.use('/api/users', userRoutes);

// OAuth Routes
app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect to your desired route
    res.redirect('/desktop');
  }
);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Sample route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Catch-all route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
