const router = require('express').Router();
const { index } = require('../api/controllers/coffee-controller');

router.post('/', index);

module.exports = router;