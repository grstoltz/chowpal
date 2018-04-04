// var models = require("../models");
// var db = models.db
// var Op = models.Op

// Display list of all items.
exports.item_list = function(req, res) {
    res.send('NOT IMPLEMENTED: item list');
};

// Display detail page for a specific item.
exports.item_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: item detail: ' + req.params.id);
};

// Handle item create on POST.
exports.item_create = function(req, res) {
    res.send('NOT IMPLEMENTED: item create POST');
};

// Display item delete form on DELETE.
exports.item_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: item delete on DELETE' + req.params.id);
};

// Handle item update on Update.
exports.item_update = function(req, res) {
    res.send('NOT IMPLEMENTED: item update' + + req.params.id);
};
