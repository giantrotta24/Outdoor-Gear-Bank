var Customer = require('../models/Customer');

// Display list of all customers.
exports.customer_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Customer list');
};

// Display detail page for a specific customer.
exports.customer_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Customer detail: ' + req.params.id);
};

// Display customer create form on GET.
exports.customer_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Customer create GET');
};

// Handle customer create on POST.
exports.customer_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Customer create POST');
};

// Display customer delete form on GET.
exports.customer_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Customer delete GET');
};

// Handle customer delete on POST.
exports.customer_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Customer delete POST');
};

// Display customer update form on GET.
exports.customer_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Customer update GET');
};

// Handle customer update on POST.
exports.customer_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Customer update POST');
};