const itemController = require('../../controllers/itemController');

module.exports = app => {
    app.get('/api/items', itemController.findAll);

    app.post('/api/items', itemController.addItem);

    app.get('/api/items', itemController.updateItem);
}

