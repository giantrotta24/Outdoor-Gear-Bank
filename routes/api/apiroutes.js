const Controller = require('../../controllers/Controller');

module.exports = app => {
    
    // ITEM routes
    app.get('/api/items', Controller.findAll);
    app.get('/api/items/:id', Controller.findItemByID);
    app.get('/api/categories', Controller.findCategories);
    app.get('/api/categories/:category', Controller.findItemsByCategory);
    app.post('/api/items', Controller.addItem);
    // Route to process for checkout 
    app.get('/api/process', Controller.process);
    // Route to checkout an item for rent
    app.post('/api/checkout', Controller.checkout);
    app.post('/api/items/:id', Controller.updateItem);
    app.delete('/api/items/:id', Controller.deleteItem);

    // MAINTENANCE COMMENT routes
    app.get('/api/:itemID/maintcomments', Controller.findItemWithMaintComments);
    app.post('/api/:itemID/maintcomments', Controller.addMaintComment);
    app.get('/api/maintenance', Controller.findItemsInMaintenance);
    app.delete('/api/maintcomments/:maintcommentID/:itemID', Controller.deleteMaintComment);

    // CUSTOMER routes
    app.post('/api/customers', Controller.addCustomer);
    app.get('/api/customers', Controller.findAllCustomers);
    app.get('/api/lastname/:lastname/items', Controller.findCustomerByLastName);
    app.get('/api/phonenumber/:phonenumber/items', Controller.findCustomerByPhoneNumber);
    app.get('/api/membernumber/:membernumber/items', Controller.findCustomerByMemberNumber);
    app.get('/api/email/:email/items', Controller.findCustomerByEmail);
    app.post('/api/:customerID/:itemID', Controller.addItemToCustomer);
    app.delete('/api/delete/:customerID/:itemID', Controller.deleteItemFromCustomer);
}