const Comment = require ('../database/models/Comment');

// Dummy callbacks for set-up
// Display list of all Comments
exports.comment_list = (req, res) => {
  res.send('NOT IMPLEMENTED: Comment List');
};

// Display detail page for a specific Comment.
exports.comment_detail = (req, res) => {
  res.send('NOT IMPLEMENTED: Comment detail: ' + req.params.id);
};

// Display Comment create form on GET.
exports.comment_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Comment create GET');
};

// Handle Comment create on POST.
exports.comment_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Comment create POST');
};

// Display Comment delete form on GET.
exports.comment_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Comment delete GET');
};

// Handle Comment delete on POST.
exports.comment_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Comment delete POST');
};

// Display Comment update form on GET.
exports.comment_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Comment update GET');
};

// Handle Comment update on POST.
exports.comment_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Comment update POST');
};