const itemController = require('../../controllers/itemController');
// const express = require('express');
// const router = express.Router();

module.exports = app => {
    app.get('/api/items', itemController.items);

    app.post('/api/items', itemController.addInventory);
}