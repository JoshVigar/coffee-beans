const router = require('express').Router();
const { addToPot } = require('../api/controllers/coffee-controller');

router.post('/', addToPot);

module.exports = router;