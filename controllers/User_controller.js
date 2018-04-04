// var models = require("../models");
// var db = models.db
// var Op = models.Op

// Display list of all users.
exports.user_list = function(req, res) {
    res.send('NOT IMPLEMENTED: user list');
};

// Display detail page for a specific user.
exports.user_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: user detail: ' + req.params.id);
};

// Handle user create on POST.
exports.user_create = function(req, res) {
    res.send('NOT IMPLEMENTED: user create POST');
};

// Display user delete form on DELETE.
exports.user_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: user delete on DELETE' + req.params.id);
};

// Handle user update on Update.
exports.user_update = function(req, res) {
    res.send('NOT IMPLEMENTED: user update' + req.params.id);
};