const db = require("../database");

// Defining methods for the itemController
module.exports = {
  findAll: (req, res) => {
    db.Item.find(req.query)
      .then(dbItem => res.json(dbItem))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Item.findById(req.params.id)
      .then(dbItem => res.json(dbItem))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Item.save(req.body)
      .then(dbItem => res.json(dbItem))
      .catch(err => res.status(422).json(err));
      res.send('item added successfully');
  },
  update: (req, res) => {
    db.Item.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbItem => res.json(dbItem))
      .catch(err => res.status(422).json(err));
  },
  delete: (req, res) => {
    db.Item.findById(req.params.id)
      .then(dbItem => dbItem.remove())
      .then(dbItem => res.json(dbItem))
      .catch(err => res.status(422).json(err));
  }
};