const express = require('express');
const { register, login } = require('../controller/authController');
const router = express.Router();

router.post('/auth/register', register);
router.post('/login', login);

module.exports = router;
