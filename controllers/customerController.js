const Customer = require('../models/Customer');

// DUMMY CALLBACKS - THIS IS NOT FINISHED
// Display list of all customers.
exports.customer_list = (req, res) => {
    res.send('NOT IMPLEMENTED: Customer list');
};

// Display detail page for a specific customer.
exports.customer_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: Customer detail: ' + req.params.id);
};

// Display customer create form on GET.
exports.customer_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Customer create GET');
};

// Handle customer create on POST.
exports.customer_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Customer create POST');
};

// Display customer delete form on GET.
exports.customer_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Customer delete GET');
};

// Handle customer delete on POST.
exports.customer_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Customer delete POST');
};

// Display customer update form on GET.
exports.customer_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Customer update GET');
};

// Handle customer update on POST.
exports.customer_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Customer update POST');
};