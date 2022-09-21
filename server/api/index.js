const router = require('express').Router();

// router.use('/students', require('./students'));

router.use('/cards', require('./cards'));

router.use((req, res, next) => {
	const err = new Error('API route not found!');
	err.status = 404;
	next(err);
});

module.exports = router;
