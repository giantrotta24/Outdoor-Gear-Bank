import axios from 'axios';

export default {
    // ITEMS
    findAll: function() {
        return axios.get('/api/items');
    },
    findCategories: function() {
        return axios.get('/api/categories');
    },
    findItemsByCategory: function(category) {
        return axios.get('/api/categories/' + category);
    },
    findItemByID: function(id) {
        return axios.get('/api/items/' + id);
    },
    addItem: function(itemData) {
        return axios.post('/api/items', itemData);
    },
    process: function() {
        return axios.get('/api/process');
    },
    checkout: function() {
        return axios.post('/api/checkout');
    },
    updateItem: function(id, body) {
        return axios.post('/api/items/' + id, body);
    },
    deleteItem: function() {
        return axios.delete('/api/items/:id');
    },

    // COMMENTS
    addComment: function(itemID, comment) {
        return axios.post('/api/comments/' + itemID, comment);
    },
    findItemWithComments: function(itemID) {
        return axios.get('/api/comments/' + itemID);
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
    addItemToCustomer: function(custId, itemId) {
        return axios.post('/api/' + custId + '/' + itemId);
    },
    findCustomerByLastName: function(lastname) {
        return axios.get('/api/lastname/' + lastname + '/items');
    },
    findCustomerByPhoneNumber: function(phonenumber) {
        return axios.get('/api/phonenumber/' + phonenumber + '/items');
    },
    findCustomerByMemberNumber: function(membernumber) {
        return axios.get('/api/membernumber/' + membernumber + '/items');
    },
    findCustomerByEmail: function(email) {
        return axios.get('/api/email/' + email + '/items');
    },
    deleteItemFromCustomer: function(customerID, itemID) {
        return axios.delete('/api/' + customerID + '/' + itemID);
    }
}