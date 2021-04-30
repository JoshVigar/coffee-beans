const router = require('express').Router();
const coffeeRouter = require('./coffee-router');

router.use('/coffee', coffeeRouter);

module.exports = router;