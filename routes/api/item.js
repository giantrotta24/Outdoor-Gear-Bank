const itemController = require('../../controllers/itemController');

module.exports = app => {
    // ITEM routes
    // Route to find all items in database
    app.get('/api/items', itemController.findAll);
    // Route to add an item to the database
    app.post('/api/items', itemController.addItem);
    // Route to update a specific item in the database
    app.post('/api/items/:id', itemController.updateItem);
    // Route to delete a specific item in the database
    app.delete('/api/items/:id', itemController.deleteItem);

    // COMMENT routes
    // Route to get a specific item with all it's comments
    app.get('/api/:itemID/comments', itemController.findItemWithComments);
    // Route to add a comment
    app.post('/api/:itemID/comments', itemController.addComment);

    // MAINTENANCE COMMENT routes
    // Route to get a specific item with all it's maintenance comments
    app.get('/api/:itemID/maintcomments', itemController.findItemWithMaintComments);
    // Route to add a maintenance comment
    app.post('/api/:itemID/maintcomments', itemController.addMaintComment);

    // CUSTOMER routes
    // Route to add customer
    app.post('/api/customers', itemController.addCustomer);
    // Route to get a specific customer with all the gear they currently have rented out

    // Route to add an item to a customer's "bank"

    // Route to delete an item from a customer's "bank"
}

