const express = require('express');
const { calculateBenefits } = require('../controller/calcController');
const router = express.Router();

router.post('/', calculateBenefits);

module.exports = router;
