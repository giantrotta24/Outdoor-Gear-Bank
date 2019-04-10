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
    addItem: function(itemData) {
        return axios.post('/api/items', itemData);
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
    addMaintComment: function(id,comment) {
        // return axios.post('/api/:itemID/maintcomments');
        return axios.post('/api/' + id + '/maintcomments');

    },
    findItemWithMaintComments: function(id) {
        // return axios.get('/api/:itemID/maintcomments');
        return axios.get('/api/' + id + '/maintcomments');

    },

    // CUSTOMER
    addCustomer: function() {
        return axios.post('/api/customers');
    },
    addItemToCustomer: function() {
        return axios.post('/api/:customerID/:itemID');
    },
    findCustomerByID: function() {
        return axios.get('/api/:customerID/items');
    },
    deleteItemFromCustomer: function() {
        return axios.delete('/api/:customerID/:itemID');
    }
}