const express = require('express');
const router = express.Router();
const Show = require('../models/Show');

// router.get('/:id', (req, res) => {
// 	let query = {_id: ObjectId(req.params.id)};
// 	req.db.collection('shows').findOne(query, function(err, ret) {
// 		if (err) {
// 			throw err;
// 		}
//
// 		res.send(ret);
// 	});
// });

// router.delete('/delete/:id', (req, res) => {
// 	let query = {_id: ObjectId(req.params.id)};
// 	req.db.collection('shows').deleteOne(query, function(err, ret) {
// 		if (err) {
// 			throw err;
// 		}
//
// 		res.send(ret);
// 	});
// });

router.route('/')
	.get((req, res) => {
		Show.find(function (err, data) {
	    if (err) {
				res.status(500).send(err);
			}

	    res.send(data);
	  });
	})
	.post((req, res) => {
	  Show.create(req.body, function (err, data) {
	    if (err) {
				res.status(500).send(err);
			}

	    res.send(data);
	  });
	});

// router.put(("/put"), (req, res) => {
// 		let query = {_id: ObjectId(req.body.id)};
// 		let changes = {$set: req.body.changes};
// 	  req.db.collection("shows").updateOne(query, changes, function(err, ret) {
// 			if (err) {
//   			throw err;
//   		}
//
// 	    res.send(ret);
// 	  });
//   });

module.exports = router;
