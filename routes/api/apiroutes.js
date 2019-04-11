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
    // Route to add a comment
    app.post('/api/comments/:itemID', Controller.addComment);
    // Route to get a specific item with all it's comments
    app.get('/api/comments/:itemID', Controller.findItemWithComments);


    // MAINTENANCE COMMENT routes
    // Route to get a specific item with all it's maintenance comments
    app.get('/api/:itemID/maintcomments', Controller.findItemWithMaintComments);
    // Route to add a maintenance comment
    app.post('/api/:itemID/maintcomments', Controller.addMaintComment);

    // CUSTOMER routes
    // Route to add customer
    app.post('/api/customers', Controller.addCustomer);
    // Route to get list of all customers
    app.get('/api/customers', Controller.findAllCustomers);
    // Route to get a specific customer with all the gear they currently have rented out
    app.get('/api/lastname/:lastname/items', Controller.findCustomerByLastName);
    app.get('/api/phonenumber/:phonenumber/items', Controller.findCustomerByPhoneNumber);
    app.get('/api/membernumber/:membernumber/items', Controller.findCustomerByMemberNumber);
    app.get('/api/email/:email/items', Controller.findCustomerByEmail);
    // Route to add an item to a customer's "bank"
    app.post('/api/:customerID/:itemID', Controller.addItemToCustomer);
    // Route to delete an item from a customer's "bank"
    app.delete('/api/:customerID/:itemID', Controller.deleteItemFromCustomer);
}

