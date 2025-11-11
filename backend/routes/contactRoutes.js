const express = require('express');
const { body } = require('express-validator');
const { createContact, getContacts } = require('../controllers/contactController');
const rateLimit = require('express-rate-limit');

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many contact attempts, please try again after 15 minutes'
  }
});

const router = express.Router();

// Validation rules
const contactValidation = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .trim(),
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('message')
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters')
    .trim()
];

router.post('/', contactLimiter, contactValidation, createContact);
router.get('/', getContacts);

module.exports = router;