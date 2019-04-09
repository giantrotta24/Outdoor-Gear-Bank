import axios from 'axios';

export default {
    // ITEMS
    findAll: function() {
        return axios.get('/api/items');
    },
    findCategories: function() {
        return axios.get('/api/categories');
    },
    findItemsByCategory: function() {
        return axios.get('/api/categories/:category');
    },
    findItemByID: function() {
        return axios.get('/api/items/:id');
    },
    addItem: function() {
        return axios.post('/api/items');
    },
    updateItem: function(itemID) {
        return axios.post('/api/items/' + itemID);
    },
    updateStatus: function(itemID, status) {
        return axios.post('/api/' + itemID + '/' + status);
    },
    deleteItem: function() {
        return axios.delete('/api/items/:id');
    },

    // COMMENTS
    addComment: function() {
        return axios.post('/api/comments/:itemID');
    },
    findItemWithComments: function() {
        return axios.get('/api/comments/:itemID');
    },

    // MAINTENANCE COMMENTS
    addMaintComment: function(id,comment) {
        return axios.post('/api/' + id + '/maintcomments');
    },
    findItemWithMaintComments: function(id) {
        return axios.get('/api/' + id + '/maintcomments');
    },

    // CUSTOMER
    addCustomer: function() {
        return axios.post('/api/customers');
    },
    findAllCustomers: function() {
        return axios.get('/api/customers');
    },
    addItemToCustomer: function() {
        return axios.post('/api/:customerID/:itemID');
    },
    findCustomerByLastName: function(lastname) {
        return axios.get('/api/' + lastname + '/items');
    },
    deleteItemFromCustomer: function(customerID, itemID) {
        return axios.delete('/api/' + customerID + '/' + itemID);
    }
}