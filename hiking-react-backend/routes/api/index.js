const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/favorites', require('./favorites'));

module.exports = router;