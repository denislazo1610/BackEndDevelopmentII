const express = require('express');
const router = express.Router();

const controller = require('../controller/index');

router.get('/', controller.message);

module.exports = router;
