const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
  db.Comment.find({}).populate('user').then((dbComment) => {
    res.json(dbComment);
  }).catch((err) => {
    console.log(err);
  });
});

router.delete('/:commentID', (req, res) => {
  db.Comment.deleteOne({ _id: req.params.commentID }).then((dbComment) => {
    res.json(dbComment);
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;