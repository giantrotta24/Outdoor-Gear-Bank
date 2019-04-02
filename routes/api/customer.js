const express = require('express');
const router = express.Router();

// Require customer controller modules.
const customer_controller = require('../controllers/customerController');

/// CUSTOMER ROUTES ///

// GET request for creating a Customer. NOTE This must come before routes that display Customer (uses id).
router.get('/customer/create', customer_controller.customer_create_get);

// POST request for creating Customer.
router.post('/customer/create', customer_controller.customer_create_post);

// GET request to delete Customer.
router.get('/customer/:id/delete', customer_controller.customer_delete_get);

// POST request to delete Customer.
router.post('/customer/:id/delete', customer_controller.customer_delete_post);

// GET request to update Customer.
router.get('/customer/:id/update', customer_controller.customer_update_get);

// POST request to update Customer.
router.post('/customer/:id/update', customer_controller.customer_update_post);

// GET request for one Customer.
router.get('/customer/:id', customer_controller.customer_detail);

// GET request for list of all Customers.
router.get('/customers', customer_controller.customer_list);