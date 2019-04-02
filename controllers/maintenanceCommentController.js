const maintComment = require ('../database/models/MaintenanceComment');

// Dummy callbacks for set-up
// Display list of all maintComments
exports.maint_comment_list = (req, res) => {
  res.send('NOT IMPLEMENTED: maintComment List');
};

// Display detail page for a specific maintComment.
exports.maint_comment_detail = (req, res) => {
  res.send('NOT IMPLEMENTED: maintComment detail: ' + req.params.id);
};

// Display maintComment create form on GET.
exports.maint_comment_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: maintComment create GET');
};

// Handle maintComment create on POST.
exports.maint_comment_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: maintComment create POST');
};

// Display maintComment delete form on GET.
exports.maint_comment_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: maintComment delete GET');
};

// Handle maintComment delete on POST.
exports.maint_comment_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: maintComment delete POST');
};

// Display maintComment update form on GET.
exports.maint_comment_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: maintComment update GET');
};

// Handle maintComment update on POST.
exports.maint_comment_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: maintComment update POST');
};