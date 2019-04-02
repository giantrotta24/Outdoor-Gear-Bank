const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
  db.maintComment.find({}).populate('item').then((dbMaintComment) => {
    res.json(dbMaintComment);
  }).catch((err) => {
    console.log(err);
  });
});

router.delete('/:maintCommentID', (req, res) => {
  db.maintComment.deleteOne({ _id: req.params.maintCommentID }).then((dbMaintComment) => {
    res.json(dbMaintComment);
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;