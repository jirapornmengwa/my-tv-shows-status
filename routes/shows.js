const express = require('express');
const router = express.Router();
const Show = require('../models/Show');

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

	router.route('/:id')
		.get((req, res) => {
			Show.find({_id: req.params.id}, function (err, data) {
		    if (err) {
					res.status(500).send(err);
				}

		    res.send(data);
		  });
		})
		.delete((req, res) => {
			Show.deleteOne({_id: req.params.id}, function (err, data) {
		    if (err) {
					res.status(500).send(err);
				}

				res.send("Show deleted successfully.");
		  });
		})
		.put((req, res) => {
			Show.updateOne({_id: req.params.id}, req.body, function (err, data) {
		    if (err) {
					res.status(500).send(err);
				}

		    res.send(data);
		  });
		});

module.exports = router;
