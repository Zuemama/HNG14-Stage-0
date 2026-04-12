const express = require('express');
const router = express.Router();
const { classifyName } = require('../controllers/classifyController');

router.get('/classify', classifyName);

module.exports = router;