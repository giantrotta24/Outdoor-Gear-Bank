const Controller = require('../../controllers/Controller');

module.exports = app => {
    // ITEM routes
    // Route to find all items in database
    app.get('/api/items', Controller.findAll);
    // Route to find item by ID
    app.get('/api/items/:id', Controller.findItemByID);
    // Find all categories that exist in the items collection
    app.get('/api/categories', Controller.findCategories);
    // Find all items within a specified category
    app.get('/api/categories/:category', Controller.findItemsByCategory);
    // Route to add an item to the database
    app.post('/api/items', Controller.addItem);
    // Route to update a specific item in the database
    app.post('/api/items/:id', Controller.updateItem);
    // Route to delete a specific item in the database
    app.delete('/api/items/:id', Controller.deleteItem);

    // COMMENT routes
    // Route to get a specific item with all it's comments
    app.get('/api/:itemID/comments', Controller.findItemWithComments);
    // Route to add a comment
    app.post('/api/:itemID/comments', Controller.addComment);

    // MAINTENANCE COMMENT routes
    // Route to get a specific item with all it's maintenance comments
    app.get('/api/:itemID/maintcomments', Controller.findItemWithMaintComments);
    // Route to add a maintenance comment
    app.post('/api/:itemID/maintcomments', Controller.addMaintComment);

    // CUSTOMER routes
    // Route to add customer
    app.post('/api/customers', Controller.addCustomer);
    // Route to get a specific customer with all the gear they currently have rented out
    app.get('/api/:customerID/items', Controller.findCustomerByID);
    // Route to add an item to a customer's "bank"
    app.post('/api/:customerID/:itemID', Controller.addItemToCustomer);
    // Route to delete an item from a customer's "bank"
    app.delete('/api/:customerID/:itemID', Controller.deleteItemFromCustomer);
}

