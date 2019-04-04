const db = require('../database');
const express = require('express');

const router = express.Router();

router.get('/api/items', (req, res) => {
    db.Item.find({}).populate('comments').populate('maintenance_comments')
    .then(dbItem => res.json(dbItem))
    .catch(err => res.status(422).json(err));
});

router.post('/api/items', (req, res) => {
    db.Item.create(req.body)
    .then(dbItem => res.json(dbItem))
    .catch(err => res.status(422).json(err));
});

router.update('/api/items/:id', (req, res) => {
    db.Item.findByIdAndUpdate(req.params.id)
    .then(dbItem => res.json(dbItem))
    .catch(err => res.status(422).json(err));
});

router.delete('/api/items/:id', (req, res) => {
    db.Item.findByIdAndRemove(req.params.id)
    .then(dbItem => res.json(dbItem))
    .catch(err => res.status(422).json(err));
});

module.exports = router;