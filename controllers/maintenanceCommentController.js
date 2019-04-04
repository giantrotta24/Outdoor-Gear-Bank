const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
  db.MaintenanceComment.find({}).populate('user').then((dbMaintComment) => {
    res.json(dbMaintComment);
  }).catch((err) => {
    console.log(err);
  });
});

router.delete('/:commentID', (req, res) => {
  db.MaintenanceComment.deleteOne({ _id: req.params.maintenancecommentID }).then((dbMaintenanceComment) => {
    res.json(dbMaintenanceComment);
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;