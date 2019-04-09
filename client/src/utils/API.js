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
    updateItem: function() {
        return axios.post('/api/items/:id');
    },
    deleteItem: function() {
        return axios.delete('/api/items/:id');
    },

    // COMMENTS
    addComment: function() {
        return axios.post('/api/:itemID/comments');
    },
    findItemWithComments: function() {
        return axios.get('/api/:itemID/comments');
    },

    // MAINTENANCE COMMENTS
    addMaintComment: function() {
        return axios.post('/api/:itemID/maintcomments');
    },
    findItemWithMaintComments: function() {
        return axios.get('/api/:itemID/maintcomments');
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
    deleteItemFromCustomer: function() {
        return axios.delete('/api/:customerID/:itemID');
    }
}