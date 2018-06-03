const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectId;

router.get('/', (req, res) => {
	req.db.collection('shows').find().toArray(function(err, ret) {
		if (err) {
			throw err;
		}

		res.send(ret);
	});
});

router.get('/:id', (req, res) => {
	let query = {_id: ObjectId(req.params.id)};
	req.db.collection('shows').findOne(query, function(err, ret) {
		if (err) {
			throw err;
		}

		res.send(ret);
	});
});

router.delete('/delete/:id', (req, res) => {
	let query = {_id: ObjectId(req.params.id)};
	req.db.collection('shows').deleteOne(query, function(err, ret) {
		if (err) {
			throw err;
		}

		res.send(ret);
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
		let query = {_id: ObjectId(req.body.id)};
		let changes = {$set: req.body.changes};
	  req.db.collection("shows").updateOne(query, changes, function(err, ret) {
			if (err) {
  			throw err;
  		}

	    res.send(ret);
	  });
  });

module.exports = router;
