var express = require('express');
var router = express.Router();

// Require controller modules.
var item_controller = require('../controllers/itemController');
var comment_controller = require('../controllers/commentController');
var maint_comment_controller = require('../controllers/maintenanceCommentController');

/// ITEM ROUTES ///

// GET catalog home page.
router.get('/', item_controller.index);

// GET request for creating an Item. NOTE This must come before routes that display Item (uses id).
router.get('/item/create', item_controller.item_create_get);

// POST request for creating Item.
router.post('/item/create', item_controller.item_create_post);

// GET request to delete Item.
router.get('/item/:id/delete', item_controller.item_delete_get);

// POST request to delete Item.
router.post('/item/:id/delete', item_controller.item_delete_post);

// GET request to update Item.
router.get('/item/:id/update', item_controller.item_update_get);

// POST request to update Item.
router.post('/item/:id/update', item_controller.item_update_post);

// GET request for one Item.
router.get('/item/:id', item_controller.item_detail);

// GET request for list of all Items.
router.get('/items', item_controller.item_list);

/// COMMENT ROUTES ///

// GET request for creating Comment. NOTE This must come before route for id (i.e. display comment).
router.get('/comment/create', comment_controller.comment_create_get);

// POST request for creating Comment.
router.post('/comment/create', comment_controller.comment_create_post);

// GET request to delete Comment.
router.get('/comment/:id/delete', comment_controller.comment_delete_get);

// POST request to delete Comment.
router.post('/comment/:id/delete', comment_controller.comment_delete_post);

// GET request to update Comment.
router.get('/comment/:id/update', comment_controller.comment_update_get);

// POST request to update Comment.
router.post('/comment/:id/update', comment_controller.comment_update_post);

// GET request for one Comment.
router.get('/comment/:id', comment_controller.comment_detail);

// GET request for list of all Comments.
router.get('/comments', comment_controller.comment_list);

/// MAINTENANCE COMMENT ROUTES ///

// GET request for creating Maintenance Comment. NOTE This must come before route for id (i.e. display maintenance comment).
router.get('/maintcomment/create', maint_comment_controller.maint_comment_create_get);

// POST request for creating Comment.
router.post('/maintcomment/create', maint_comment_controller.maint_comment_create_post);

// GET request to delete Comment.
router.get('/maintcomment/:id/delete', maint_comment_controller.maint_comment_delete_get);

// POST request to delete Comment.
router.post('/maintcomment/:id/delete', maint_comment_controller.maint_comment_delete_post);

// GET request to update Comment.
router.get('/maintcomment/:id/update', maint_comment_controller.maint_comment_update_get);

// POST request to update Comment.
router.post('/maintcomment/:id/update', maint_comment_controller.maint_comment_update_post);

// GET request for one Comment.
router.get('/maintcomment/:id', maint_comment_controller.maint_comment_detail);

// GET request for list of all Comments.
router.get('/maintcomments', maint_comment_controller.maint_comment_list);
module.exports = router;