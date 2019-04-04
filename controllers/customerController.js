const db = require('../database');
const express = require('express');
const router = express.Router();

router.get('/api/customers', (req, res) => {
    db.Customer.find({})
    .then(dbCustomer => res.json(dbCustomer))
    .catch(err => res.status(422).json(err));
});

router.post('/api/customerss', (req, res) => {
    db.Customer.create(req.body)
    .then(dbCustomer => res.json(dbCustomer))
    .catch(err => res.status(422).json(err));
});

router.update('/api/customers/:id', (req, res) => {
    db.Item.findByIdAndUpdate(req.params.id)
    .then(dbCustomer => res.json(dbCustomer))
    .catch(err => res.status(422).json(err));
});

router.delete('/api/customers/:id', (req, res) => {
    db.Customer.findByIdAndRemove(req.params.id)
    .then(dbCustomer => res.json(dbCustomer))
    .catch(err => res.status(422).json(err));
});

module.exports = router;