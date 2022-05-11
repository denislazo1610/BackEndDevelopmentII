const express = require('express');
const router = express.Router();

const controller = require('../controller/index');

router.get('/index', controller.message);
router.use('/contacts', require('./contacts'));

module.exports = router;
