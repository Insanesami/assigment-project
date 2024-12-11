const express = require('express');
const { getPolicies } = require('../controller/policyController');
const router = express.Router();

router.get('/', getPolicies);

module.exports = router;
