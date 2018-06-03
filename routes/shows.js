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

router.route('/register')
  .post((req, res) => {
    req.db.collection('shows').insertOne(req.body, function(err, ret) {
      if (err) {
  			throw err;
  		}

      res.send(ret.insertedId);
    });
  })
  .put((req, res) => {
    res.send('Update');
  });

module.exports = router;
