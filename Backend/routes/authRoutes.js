const express = require('express');
const { signup, signin } = require('../controllers/authController'); // Import the controller functions
const router = express.Router(); // Create a new router instance

// Define the signup route
router.post('/signup', signup);

// Define the login route
router.post('/signin', signin);

module.exports = router; // Export the router so it can be used in the main application

