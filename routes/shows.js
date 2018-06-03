const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	req.db.collection('shows').find().toArray(function(err, result) {
		if (err) {
			throw err;
		}

		res.send(result);
	});
});

module.exports = router;
